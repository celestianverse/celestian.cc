import type { Metadata } from "next";
import { app } from "@/data/app";
import { uikit } from "@/data/uikit";
import { AnchorPlayground } from "./_components/AnchorPlayground/AnchorPlayground";

export const metadata: Metadata = {
  title: `${uikit.pages.controls.anchor.seo.title} — ${app.name}`,
};

const AnchorPage = () => {

  return (
    <AnchorPlayground />
  );
};

export default AnchorPage;