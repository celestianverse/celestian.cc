"use client";
import { useState } from "react";
import { TONE } from "@/constants/styles";
import { COLOR } from "@/constants/color";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./BadgePlayground.constants";
import type { BadgeProps } from "@/components/uikit/Badge/Badge.types";
import { Badge } from "@/components/uikit/Badge/Badge";
import { BADGE_BORDER_RADIUS, BADGE_SIZE } from "@/components/uikit/Badge/Badge.constants";

export const BadgePlayground = () => {
  const [props, setProps] = useState<BadgeProps>(DEFAULT_CHOSEN_PROPS);

  const BadgeComponent = (
    <Badge {...props}>
      5
    </Badge>
  );

  const settings = {
    color: COLOR,
    tone: TONE,
    size: BADGE_SIZE,
    radius: BADGE_BORDER_RADIUS,
    dot: props.dot,
  };

  const childrenContent = props.dot ? null : "5";

  const code = buildComponentCode<BadgeProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: childrenContent,
  });

  return (
    <Playground.Root title={uikit.dataDisplay.badge.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.dataDisplay.badge.longTitle}
        component={BadgeComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};