import { Document } from "@/layouts/MainLayout/_components/Document/Document";
import { Header } from "@/layouts/MainLayout/_components/Header/Header";
import { Body } from "@/layouts/MainLayout/_components/Body/Body";
import type { Props } from "./MainLayout.types";
import { Footer } from "@/layouts/MainLayout/_components/Footer/Footer";

export const MainLayout = ({ children }: Props) => {
  return (
    <Document>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </Document>
  );
};
