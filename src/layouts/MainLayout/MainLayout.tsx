import { Document } from "./_components/Document/Document";
import { Header } from "./_components/Header/Header";
import { Body } from "./_components/Body/Body";
import { Footer } from "./_components/Footer/Footer";
import type { Props } from "./MainLayout.types";

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
