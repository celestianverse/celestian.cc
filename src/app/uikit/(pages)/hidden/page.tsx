import type { Metadata } from "next";
import { HiddenPlayground } from "@/app/uikit/(pages)/hidden/_components/HiddenPlayground/HiddenPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.utilities.hidden.title,
};

const HiddenPage = () => {

  return (
    <HiddenPlayground />
  );
};

export default HiddenPage;