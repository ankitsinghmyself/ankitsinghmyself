import { Sora } from "next/font/google";

import CustomCursorGate from "@/components/common/custom-cursor-gate";
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
  const currentYear = new Date().getUTCFullYear();

  return (
    <body suppressHydrationWarning className={`${sora.variable} antialiased`}>
      <CustomCursorGate />
      <Header />
      {children}
      <Footer year={currentYear} />
      <VercelAnalytics />
    </body>
  );
}
