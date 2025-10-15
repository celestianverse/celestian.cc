"use client";
import { useState } from "react";
import { ALIGN_ITEMS, GAP, JUSTIFY_CONTENT } from "@/constants/styles";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./PagePlayground.constants";
import { Page } from "@/components/uikit/Page/Page";
import { Box } from "@/components/uikit/Box/Box";
import type { PageProps } from "@/components/uikit/Page/Page.types";

export const PagePlayground = () => {
  const [props, setProps] = useState<PageProps>(DEFAULT_CHOSEN_PROPS);

  const PageComponent = (
    <Page {...props}>
      <Box
        color="primary"
        tone="soft"
        paddingY={64}
        radius={8}
      />
      <Box
        color="primary"
        tone="soft"
        paddingY={64}
        radius={8}
      />
      <Box
        color="primary"
        tone="soft"
        paddingY={64}
        radius={8}
      />
    </Page>
  );

  const settings = {
    align: ALIGN_ITEMS,
    justify: JUSTIFY_CONTENT,
    gap: GAP,
  };

  const code = buildComponentCode<PageProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.page.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.page.longTitle}
        component={PageComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};