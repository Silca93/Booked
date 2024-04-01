
import { Arapey } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/Redux/reduxProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Arapey({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Booked",
  description: "Where you book your books",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <ReduxProvider>
          <Header/>
           {children}
          <Footer/> 
        </ReduxProvider>
      </body>
    </html>
  );
}
