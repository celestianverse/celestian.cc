"use client";
import { useState } from "react";
import { Text } from "@/components/uikit/Text/Text";
import type { TextProps } from "@/components/uikit/Text/Text.types";
import { FONT_WEIGHT, LINE_HEIGHT, WHITE_SPACE } from "@/constants/styles";
import { COLORS } from "@/constants/colors";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { DEFAULT_PROPS, NAME } from "@/app/uikit/(pages)/text/_components/TextPlayground/TextPlayground.constants";
import { Playground } from "@/components/custom/Playground/Playground";
import { TEXT_SIZE } from "@/components/uikit/Text/Text.constants";

export const TextPlayground = () => {
  const [props, setProps] = useState<TextProps>(DEFAULT_PROPS);

  const TextComponent = (
    <Text {...props}>
      Text
    </Text>
  );

  const settings = {
    color: ["inherit", ...COLORS],
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
    <Playground.Root title={uikit.typography.text.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.typography.text.longTitle}
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