import type { Metadata } from "next";
import { SwitchPlayground } from "@/app/uikit/(pages)/switch/_components/SwitchPlayground/SwitchPlayground";
import { app } from "@/data/app";
import { uikit } from "@/data/uikit";

export const metadata: Metadata = {
  title: `${uikit.pages.controls.switch.seo.title} — ${app.name}`,
};

const ButtonPage = () => {

  return (
    <SwitchPlayground />
  );
};

export default ButtonPage;