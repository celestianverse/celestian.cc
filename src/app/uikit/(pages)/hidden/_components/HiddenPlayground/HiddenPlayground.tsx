"use client";
import { useState } from "react";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { DEFAULT_PROPS, NAME } from "./HiddenPlayground.constants";
import { Playground } from "@/components/custom/Playground/Playground";
import { Hidden } from "@/components/uikit/Hidden/Hidden";
import { HIDDEN_ON } from "@/components/uikit/Hidden/Hidden.constants";
import type { HiddenProps } from "@/components/uikit/Hidden/Hidden.types";

export const HiddenPlayground = () => {
  const [props, setProps] = useState<HiddenProps>(DEFAULT_PROPS);

  const HiddenComponent = (
    <Hidden {...props}>
      Content...
    </Hidden>
  );

  const settings = {
    on: HIDDEN_ON,
  };

  const code = buildComponentCode<HiddenProps>({
    name: NAME,
    props,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.utilities.hidden.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.utilities.hidden.longTitle}
        component={HiddenComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code}/>
    </Playground.Root>
  );
};