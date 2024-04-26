import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";
//import CardSection from "./CardSection";
import BackgroundAnimation from "./BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundAnimation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
