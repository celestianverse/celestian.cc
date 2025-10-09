"use client";
import { useState } from "react";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { uikit } from "@/data/uikit";
import { DEFAULT_PROPS, NAME } from "./SelectPlayground.constants";
import type { SelectProps } from "@/components/uikit/Select/Select.types";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { SELECT_VARIANT } from "@/components/uikit/Select/Select.constants";
import { BORDER_STYLE, CONTROL_BORDER_RADIUS, CONTROL_SIZE, TONE } from "@/constants/styles";
import { COLORS } from "@/constants/colors";

export const SelectPlayground = () => {
  const [props, setProps] = useState<SelectProps>(DEFAULT_PROPS);

  const SelectComponent = (
    <Select
      {...props}
      onChange={(value) => setProps(prev => ({...prev, value: value}))}
    >
      {[...Array(5).keys()].map(item => (
        <SelectOption
          key={item+1}
          label={`Select option ${item+1}`}
        />
      ))}
    </Select>
  );

  const settings = {
    variant: SELECT_VARIANT,
    color: COLORS,
    tone: TONE,
    size: CONTROL_SIZE,
    width: ["auto", 240, "100%"],
    radius: CONTROL_BORDER_RADIUS,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(5).keys()],
    disabled: props.disabled,
  };

  const getDefaultRadius = () => {
    if (props.size === "s") return 8;

    if (props.size === "l") return 16;

    return 12;
  };

  const childrenContent = `<SelectOption label="Option 1" />\n<SelectOption label="Option 2" />\n<SelectOption label="Option 3" />`;

  const code = buildComponentCode<SelectProps>({
    name: NAME,
    props,
    defaults: {...DEFAULT_PROPS, radius: getDefaultRadius()},
    children: childrenContent,
  });

  return (
    <>
      <Playground.Root title={uikit.controls.select.longTitle}>
        <Playground.Component
          name={NAME}
          title={uikit.controls.select.longTitle}
          component={SelectComponent}
          props={props}
          setProps={setProps}
          settings={settings}
          defaultChosenProps={DEFAULT_PROPS}
        />
        <Playground.Code code={code} />
      </Playground.Root>
    </>
  );
};