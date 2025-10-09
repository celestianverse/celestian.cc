"use client";
import { useState } from "react";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import type { AnchorProps } from "@/components/uikit/Anchor/Anchor.types";
import { ANCHOR_ELEMENT, ANCHOR_SIZE, ANCHOR_VARIANT } from "@/components/uikit/Anchor/Anchor.constants";
import { BORDER_STYLE, PADDING } from "@/constants/styles";
import { COLORS } from "@/constants/colors";
import { ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./AnchorPlayground.constants";

export const AnchorPlayground = () => {
  const [props, setProps] = useState<AnchorProps>(DEFAULT_CHOSEN_PROPS);

  const AnchorComponent = (
    <Anchor {...props}>
      {NAME}
    </Anchor>
  );

  const settings = {
    as: ANCHOR_ELEMENT,
    variant: ANCHOR_VARIANT,
    color: COLORS,
    size: ANCHOR_SIZE,
    padding: PADDING,
    paddingY: PADDING,
    paddingX: PADDING,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(6).keys()],
    iconStart: Object.keys(ICONS),
    iconEnd: Object.keys(ICONS),
    iconOnly: Object.keys(ICONS),
    fullwidth: props.fullwidth,
    disabled: props.disabled,
  };

  const childrenContent = props.iconOnly === "none" ? NAME : null;

  const code = buildComponentCode<AnchorProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: childrenContent,
  });

  return (
    <Playground.Root title={uikit.controls.anchor.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.controls.anchor.longTitle}
        component={AnchorComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};