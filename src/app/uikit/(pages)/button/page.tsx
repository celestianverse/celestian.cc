import type { Metadata } from "next";
import { ButtonPlayground } from "./_components/ButtonPlayground/ButtonPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.button.title,
};

const ButtonPage = () => {

  return (
    <ButtonPlayground />
  );
};

export default ButtonPage;