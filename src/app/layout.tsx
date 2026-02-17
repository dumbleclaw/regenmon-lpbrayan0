import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrivyWrapper from "@/components/PrivyWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regenmon - Tu Compañero Virtual",
  description: "Cuida y entrena a tu Regenmon digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <PrivyWrapper>
          {children}
        </PrivyWrapper>
      </body>
    </html>
  );
}