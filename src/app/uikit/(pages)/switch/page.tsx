import type { Metadata } from "next";
import { SwitchPlayground } from "@/app/uikit/(pages)/switch/_components/SwitchPlayground/SwitchPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.switch.title,
};

const ButtonPage = () => {

  return (
    <SwitchPlayground />
  );
};

export default ButtonPage;