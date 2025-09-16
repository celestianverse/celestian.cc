import React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { THEME } from "@/constants/theme";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import "@/styles/tokens.scss";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Celestian — design & frontend for your project",
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
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
