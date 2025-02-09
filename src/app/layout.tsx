import React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { THEME } from "@/constants/theme";
import "@/styles/themes.css";
import "@/styles/tokens.css";
import "@/styles/base.scss";

export const metadata: Metadata = {
  title: "Celestian",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider value={{ light: THEME.light, dark: THEME.dark }}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
