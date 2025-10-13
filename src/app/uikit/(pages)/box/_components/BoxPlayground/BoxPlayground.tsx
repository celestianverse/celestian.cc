"use client";
import { useState } from "react";
import {
  ALIGN_ITEMS,
  BORDER_STYLE,
  FLEX_DIRECTION, FLEX_WRAP,
  GAP,
  JUSTIFY_CONTENT,
  OVERFLOW,
  PADDING,
  TONE
} from "@/constants/styles";
import { COLORS_WITH_TRANSPARENT } from "@/constants/colors";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./BoxPlayground.constants";
import type { BoxProps } from "@/components/uikit/Box/Box.types";
import { Box } from "@/components/uikit/Box/Box";
import { BOX_BORDER_RADIUS, BOX_VARIANT } from "@/components/uikit/Box/Box.constants";
import { FLEX_ELEMENT } from "@/components/uikit/Flex/Flex.constants";

export const BoxPlayground = () => {
  const [props, setProps] = useState<BoxProps>(DEFAULT_CHOSEN_PROPS);

  const BoxComponent = (
    <Box {...props}>
      <p>Content 1...</p>
      <p>Content 2...</p>
    </Box>
  );

  const settings = {
    as: FLEX_ELEMENT,
    variant: BOX_VARIANT,
    color: COLORS_WITH_TRANSPARENT,
    tone: TONE,
    overflow: OVERFLOW,
    direction: FLEX_DIRECTION,
    align: ALIGN_ITEMS,
    justify: JUSTIFY_CONTENT,
    wrap: FLEX_WRAP,
    grow: [...Array(2).keys()],
    gap: GAP,
    padding: PADDING,
    paddingY: PADDING,
    paddingX: PADDING,
    radius: BOX_BORDER_RADIUS,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(6).keys()],
    fullwidth: props.fullwidth,
    hoverable: props.hoverable,
  };

  const code = buildComponentCode<BoxProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.box.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.box.longTitle}
        component={BoxComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};