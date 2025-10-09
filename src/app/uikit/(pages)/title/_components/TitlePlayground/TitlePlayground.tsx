"use client";
import { useState } from "react";
import { Title } from "@/components/uikit/Title/Title";
import type { TitleProps } from "@/components/uikit/Title/Title.types";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { DEFAULT_PROPS, NAME } from "./TitlePlayground.constants";
import { Playground } from "@/components/custom/Playground/Playground";
import { COLORS_WITH_INHERIT } from "@/constants/colors";
import { TITLE_ELEMENT, TITLE_SIZE } from "@/components/uikit/Title/Title.constants";
import { FONT_WEIGHT, LINE_HEIGHT, WHITE_SPACE } from "@/constants/styles";

export const TitlePlayground = () => {
  const [props, setProps] = useState<TitleProps>(DEFAULT_PROPS);

  const TitleComponent = (
    <Title {...props}>
      {NAME}
    </Title>
  );

  const settings = {
    as: TITLE_ELEMENT,
    color: COLORS_WITH_INHERIT,
    size: TITLE_SIZE,
    weight: FONT_WEIGHT,
    lineHeight: LINE_HEIGHT,
    whiteSpace: WHITE_SPACE,
    uppercase: props.uppercase,
    lowercase: props.lowercase,
    ellipsis: props.ellipsis,
  };

  const code = buildComponentCode<TitleProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: NAME,
  });

  return (
    <Playground.Root title={uikit.dataDisplay.title.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.dataDisplay.title.longTitle}
        component={TitleComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code}/>
    </Playground.Root>
  );
};