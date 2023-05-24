import ToasterContext from "@/context/ToasterContext";
import "./globals.css";

export const metadata = {
  title: "得好好混的工具箱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <body>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
