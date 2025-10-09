"use client";
import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./DividerPlayground.constants";
import type { DividerProps } from "@/components/uikit/Divider/Divider.types";
import { Divider } from "@/components/uikit/Divider/Divider";
import { BORDER_STYLE, TONE } from "@/constants/styles";

export const DividerPlayground = () => {
  const [props, setProps] = useState<DividerProps>(DEFAULT_CHOSEN_PROPS);

  const DividerComponent = (
    <Divider {...props} />
  );

  const settings = {
    color: COLORS,
    tone: TONE,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(6).keys()],
  };

  const code = buildComponentCode<DividerProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
  });

  return (
    <Playground.Root title={uikit.utilities.divider.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.utilities.divider.longTitle}
        component={DividerComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};