import { constructMetadata } from "@/lib/metadata";
// @ts-ignore
import "./globals.css";
// @ts-ignore
import "reactflow/dist/style.css";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
