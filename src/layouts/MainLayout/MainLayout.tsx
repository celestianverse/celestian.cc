import React from "react";
import { Document } from "@/layouts/MainLayout/_components/Document/Document";
import { Header } from "@/layouts/MainLayout/_components/Header/Header";
import { Body } from "@/layouts/MainLayout/_components/Body/Body";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Document>
      <Header />
      <Body>
        {children}
      </Body>
    </Document>
  );
};
