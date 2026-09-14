import "./globals.css";

export const metadata = {
  title: "🎂 Прв роденден",
  description:
    "Со особена радост Ве покануваме на прославата на првиот роденден.",

  openGraph: {
    title: "🎂 Прв роденден",
    description:
      "Со особена радост Ве покануваме на прославата на првиот роденден.",
    url: "https://rodenden.vercel.app/",
    siteName: "Прва роденденска прослава",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      <body>{children}</body>
    </html>
  );
}
