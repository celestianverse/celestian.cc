import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { UserProvider } from "@/contexts/UserContext/UserContext";
import { buildProvidersTree } from "@/helpers/buildProvidersTree";
import { getCookieFont } from "@/services/FontService";
import { getCookieTheme } from "@/services/ThemeService";
import type { Theme } from "@/types/Theme";
import type { Font } from "@/types/Font";
import { app } from "@/data/app";
import "@/styles/tokens.scss";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: app.title,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type Props = {
  children: ReactNode;
};

type ProvidersData = {
  theme: Theme;
  font: Font;
};

const getProvidersTree = (
  {
    font,
    theme,
  }: ProvidersData) => {
  return buildProvidersTree([
    [UserProvider, {font, theme}],
  ] as const);
};

const RootLayout = async ({children}: Props) => {
  const font = await getCookieFont();
  const theme = await getCookieTheme();

  const ProvidersTree = getProvidersTree({
    font,
    theme,
  });

  return (
    <html
      lang="en"
      data-font={font}
      data-theme={theme}
      suppressHydrationWarning
    >
    <body>
    <ProvidersTree>
      <MainLayout>
        {children}
      </MainLayout>
    </ProvidersTree>
    </body>
    </html>
  );
};

export default RootLayout;
