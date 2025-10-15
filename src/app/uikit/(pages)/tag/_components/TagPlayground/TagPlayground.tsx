"use client";
import { useState } from "react";
import { BORDER_STYLE, TONE } from "@/constants/styles";
import { COLOR } from "@/constants/color";
import { ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./TagPlayground.constants";
import type { TagProps } from "@/components/uikit/Tag/Tag.types";
import { Tag } from "@/components/uikit/Tag/Tag";
import { TAG_BORDER_RADIUS, TAG_ELEMENT, TAG_SIZE, TAG_VARIANT } from "@/components/uikit/Tag/Tag.constants";

export const TagPlayground = () => {
  const [props, setProps] = useState<TagProps>(DEFAULT_CHOSEN_PROPS);

  const TagComponent = (
    <Tag {...props}>
      {NAME}
    </Tag>
  );

  const settings = {
    as: TAG_ELEMENT,
    variant: TAG_VARIANT,
    color: COLOR,
    tone: TONE,
    size: TAG_SIZE,
    radius: TAG_BORDER_RADIUS,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(6).keys()],
    iconStart: Object.keys(ICONS),
    iconEnd: Object.keys(ICONS),
    iconOnly: Object.keys(ICONS),
  };

  const childrenContent = props.iconOnly === "none" ? NAME : null;

  const code = buildComponentCode<TagProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: childrenContent,
  });

  return (
    <Playground.Root title={uikit.dataDisplay.tag.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.dataDisplay.tag.longTitle}
        component={TagComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};