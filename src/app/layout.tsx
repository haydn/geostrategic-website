import Button from "@/components/Button";
import type { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "Geostrategic",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Geostrategic</title>
    </head>
    <body>
      <header>
        <h1 className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width="34" height="34" />
          <span>Geostrategic</span>
        </h1>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1lh",
        }}
      >
        <Button
          description="Play the Geostrategic"
          href="https://game.geostrategic.particlesystem.com/"
          hue="30"
          label="Game"
        />
        <Button
          description="Learn how the game works"
          href="https://docs.geostrategic.particlesystem.com/"
          hue="120"
          label="Docs"
        />
        <Button
          description="Help develop the game"
          href="https://github.com/haydn/geostrategic-w00/"
          hue="210"
          label="Repo"
        />
      </div>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
