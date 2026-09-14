import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, attendance } = body;

    if (!name || !attendance) {
      return Response.json(
        {
          error: "Недостасуваат податоци.",
        },
        {
          status: 400,
        },
      );
    }

    const attendanceText = attendance === "yes" ? "Да, доаѓам" : "Не доаѓам";

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["kostojchinoskaviktorija@gmail.com"],
      subject: "Нова потврда за присуство",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #1688c7;">
            Нова потврда за присуство
          </h2>

          <p>
            <strong>Име и презиме:</strong>
            ${name}
          </p>

          <p>
            <strong>Одговор:</strong>
            ${attendanceText}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Email-от не можеше да се испрати.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Server error:", error);

    return Response.json(
      {
        error: "Настана грешка.",
      },
      {
        status: 500,
      },
    );
  }
}
