import type { Metadata } from "next";
import { LoaderPlayground } from "./_components/LoaderPlayground/LoaderPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.utilities.loader.title,
};

const LoaderPage = () => {
  return (
    <LoaderPlayground />
  );
};

export default LoaderPage;