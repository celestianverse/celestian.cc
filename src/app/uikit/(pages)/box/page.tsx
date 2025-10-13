import type { Metadata } from "next";
import { BoxPlayground } from "@/app/uikit/(pages)/box/_components/BoxPlayground/BoxPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.box.title,
};

const BoxPage = () => {
  return (
    <BoxPlayground />
  );
};

export default BoxPage;