import type { Metadata } from "next";
import { BadgePlayground } from "./_components/BadgePlayground/BadgePlayground";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.uikit.dataDisplay.badge.title,
};

const BadgePage = () => {
  return (
    <BadgePlayground />
  );
};

export default BadgePage;