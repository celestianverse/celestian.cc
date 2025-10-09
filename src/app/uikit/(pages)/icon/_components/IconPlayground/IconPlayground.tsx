"use client";
import { useState } from "react";
import { COLORS_WITH_INHERIT } from "@/constants/colors";
import { ICON_SIZE, ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./IconPlayground.constants";
import { Icon } from "@/components/uikit/Icon/Icon";
import type { IconProps } from "@/components/uikit/Icon/Icon.types";

export const IconPlayground = () => {
  const [props, setProps] = useState<IconProps>(DEFAULT_CHOSEN_PROPS);

  const IconComponent = (
    <Icon {...props} />
  );

  const settings = {
    name: Object.keys(ICONS),
    color: COLORS_WITH_INHERIT,
    size: ICON_SIZE,
  };

  const code = buildComponentCode<IconProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
  });

  return (
    <Playground.Root title={uikit.dataDisplay.icon.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.dataDisplay.icon.longTitle}
        component={IconComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};