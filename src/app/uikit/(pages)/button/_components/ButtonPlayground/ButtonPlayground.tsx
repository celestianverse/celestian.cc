"use client";
import { useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import type { ButtonProps } from "@/components/uikit/Button/Button.types";
import {
  BUTTON_ELEMENT,
  BUTTON_VARIANT
} from "@/components/uikit/Button/Button.constants";
import { BORDER_STYLE, CONTROL_BORDER_RADIUS, CONTROL_SIZE, JUSTIFY_CONTENT, TONE } from "@/constants/styles";
import { COLORS } from "@/constants/colors";
import { ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./ButtonPlayground.constants";

export const ButtonPlayground = () => {
  const [props, setProps] = useState<ButtonProps>(DEFAULT_CHOSEN_PROPS);

  const ButtonComponent = (
    <Button {...props}>
      {NAME}
    </Button>
  );

  const settings = {
    as: BUTTON_ELEMENT,
    variant: BUTTON_VARIANT,
    color: COLORS,
    tone: TONE,
    size: CONTROL_SIZE,
    justify: JUSTIFY_CONTENT,
    radius: CONTROL_BORDER_RADIUS,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(5).keys()],
    iconStart: Object.keys(ICONS),
    iconEnd: Object.keys(ICONS),
    iconOnly: Object.keys(ICONS),
    fullwidth: props.fullwidth,
    square: props.square,
    disabled: props.disabled,
  };

  const getDefaultRadius = () => {
    if (props.size === "s") return 8;

    if (props.size === "l") return 16;

    return 12;
  };

  const childrenContent = props.iconOnly === "none" ? NAME : null;

  const code = buildComponentCode<ButtonProps>({
    name: NAME,
    props,
    defaults: {...DEFAULT_PROPS, radius: getDefaultRadius()},
    children: childrenContent,
  });

  return (
    <Playground.Root title={uikit.controls.button.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.controls.button.longTitle}
        component={ButtonComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};