"use client";
import { useState } from "react";
import { Text } from "@/components/uikit/Text/Text";
import type { TextProps } from "@/components/uikit/Text/Text.types";
import { FONT_WEIGHT, LINE_HEIGHT, WHITE_SPACE } from "@/constants/styles";
import { COLORS_WITH_INHERIT } from "@/constants/colors";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { DEFAULT_PROPS, NAME } from "./TextPlayground.constants";
import { Playground } from "@/components/custom/Playground/Playground";
import { TEXT_ELEMENT, TEXT_SIZE } from "@/components/uikit/Text/Text.constants";

export const TextPlayground = () => {
  const [props, setProps] = useState<TextProps>(DEFAULT_PROPS);

  const TextComponent = (
    <Text {...props}>
      {NAME}
    </Text>
  );

  const settings = {
    as: TEXT_ELEMENT,
    color: COLORS_WITH_INHERIT,
    size: TEXT_SIZE,
    weight: FONT_WEIGHT,
    lineHeight: LINE_HEIGHT,
    whiteSpace: WHITE_SPACE,
    uppercase: props.uppercase,
    lowercase: props.lowercase,
    ellipsis: props.ellipsis,
  };

  const code = buildComponentCode<TextProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: NAME,
  });

  return (
    <Playground.Root title={uikit.dataDisplay.text.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.dataDisplay.text.longTitle}
        component={TextComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code}/>
    </Playground.Root>
  );
};