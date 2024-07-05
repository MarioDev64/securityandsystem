import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/Header';
import './styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Security and Sytem Technical Test",
  description: "This is a test website following the technical test requirements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
