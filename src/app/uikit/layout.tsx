import type { ReactNode } from "react";
import { Page } from "@/components/uikit/Page/Page";
import { IntroSection } from "@/components/custom/IntroSection/IntroSection";
import { Section } from "@/components/uikit/Section/Section";
import { Sidebar } from "@/app/uikit/_components/Sidebar/Sidebar";
import { uikit } from "@/data/uikit";

type Props = {
  children: ReactNode;
};

const UikitLayout = ({children}: Props) => {

  return (
    <Page>
      <IntroSection title={uikit.title} />
      <Section
        color="contrast"
        direction="row"
        gap={24}
        radiusTop={96}
        overlapBottom={96}
        mobileRadiusTop={64}
      >
        <Sidebar />
        {children}
      </Section>
    </Page>
  );
};

export default UikitLayout;
