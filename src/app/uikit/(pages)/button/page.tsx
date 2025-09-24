import type { Metadata } from "next";
import { Playground } from "@/components/custom/Playground/Playground";
import { app } from "@/data/app";
import { uikit } from "@/data/uikit";

export const metadata: Metadata = {
  title: `${uikit.pages.controls.button.seo.title} — ${app.name}`,
};

const ButtonPage = () => {

  return (
    <Playground />
  );
};

export default ButtonPage;