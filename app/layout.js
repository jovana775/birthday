import "./globals.css";

export const metadata = {
  title: "🎂 Прв родендеден",
  description: "Со задоволство Ве покануваме да го прославиме првиот роденден.",

  openGraph: {
    title: "🎂 Прв роденден",
    description:
      "Со задоволство Ве покануваме да го прославиме првиот роденден.",
    images: [
      {
        url: "/slika.jpg",
        width: 1200,
        height: 630,
        alt: "Роденденска покана",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "🎂 Прв роденден",
    description:
      "Со задоволство Ве покануваме да го прославиме првиот роденден.",
    images: ["/slika.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      <body>{children}</body>
    </html>
  );
}
