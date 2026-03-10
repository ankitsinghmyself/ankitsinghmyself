import { Sora } from "next/font/google";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import VercelAnalytics from "./vercel-analytics";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getUTCFullYear();

  return (
    <body suppressHydrationWarning className={`${sora.variable} antialiased`}>
      <Header />
      {children}
      <Footer year={currentYear} />
      <VercelAnalytics />
    </body>
  );
}
