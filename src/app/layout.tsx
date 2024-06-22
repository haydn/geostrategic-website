import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geostrategic",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
