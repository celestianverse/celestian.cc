import type { Metadata } from "next";
import { ButtonPlayground } from "@/app/uikit/(pages)/button/_components/ButtonPlayground/ButtonPlayground";
import { app } from "@/data/app";
import { uikit } from "@/data/uikit";

export const metadata: Metadata = {
  title: `${uikit.pages.controls.button.seo.title} — ${app.name}`,
};

const ButtonPage = () => {

  return (
    <ButtonPlayground />
  );
};

export default ButtonPage;