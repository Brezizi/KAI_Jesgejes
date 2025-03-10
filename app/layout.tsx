import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: "Tix Train",
  description: "Sekopling Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
