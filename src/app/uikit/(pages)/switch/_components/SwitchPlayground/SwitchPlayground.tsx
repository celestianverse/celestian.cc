"use client";
import { useState } from "react";
import { Switch } from "@/components/uikit/Switch/Switch";
import type { SwitchProps } from "@/components/uikit/Switch/Switch.types";
import { SWITCH_SIZE } from "@/components/uikit/Switch/Switch.constants";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { COLOR } from "@/constants/color";
import { uikit } from "@/data/uikit";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./SwitchPlayground.constants";

export const SwitchPlayground = () => {
  const [props, setProps] = useState<SwitchProps>(DEFAULT_CHOSEN_PROPS);

  const SwitchComponent = (
    <Switch
      {...props}
      onChange={(value) => setProps(prev => ({...prev, checked: value}))}
    />
  );

  const settings = {
    color: COLOR,
    size: SWITCH_SIZE,
    checked: props.checked,
    disabled: props.disabled,
  };

  const code = buildComponentCode<SwitchProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
  });

  return (
    <Playground.Root title={uikit.controls.switch.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.controls.switch.longTitle}
        component={SwitchComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};