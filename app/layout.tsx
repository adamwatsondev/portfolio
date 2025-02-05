import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { fjallaOne } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Adam Watson Dev Portfolio",
  description: "Developed by Adam Watson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fjallaOne.className} dark:bg-black bg-transparent antialiased`}
      >
        <div className="fixed top-0 left-0 w-full z-10 h-20">
          <Header />
        </div>

        <div className="lg:px-40 px-8 pb-20 mt-40 sm:mt-60">{children}</div>

        <div className="fixed bottom-0 left-0 w-full sm:h-12 h-10 flex items-center justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
