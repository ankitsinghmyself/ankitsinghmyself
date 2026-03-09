import { Sora } from "next/font/google";

import MotionProvider from "@/components/common/motion-provider";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import VercelAnalytics from "./vercel-analytics";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${sora.variable} antialiased`}>
      <MotionProvider>
        <Header />
        {children}
        <Footer />
        <VercelAnalytics />
      </MotionProvider>
    </body>
  );
}
