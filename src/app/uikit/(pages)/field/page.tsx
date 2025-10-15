import type { Metadata } from "next";
import { FieldPlayground } from "./_components/FieldPlayground/FieldPlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.controls.field.title,
};

const FieldPage = () => {
  return (
    <FieldPlayground />
  );
};

export default FieldPage;