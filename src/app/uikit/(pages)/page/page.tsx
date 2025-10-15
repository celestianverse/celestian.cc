import type { Metadata } from "next";
import { PagePlayground } from "./_components/PagePlayground/PagePlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.layout.page.title,
};

const PagePage = () => {
  return (
    <PagePlayground />
  );
};

export default PagePage;