import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import VercelAnalytics from "./vercel-analytics";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline-lg",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-data-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      {children}
      <VercelAnalytics />
    </body>
  );
}
