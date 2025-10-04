"use client";
import { useState } from "react";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { uikit } from "@/data/uikit";
import { DEFAULT_PROPS, NAME } from "./SelectPlayground.constants";
import type { SelectProps } from "@/components/uikit/Select/Select.types";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { SELECT_COLOR, SELECT_SIZE, SELECT_VARIANT } from "@/components/uikit/Select/Select.constants";
import { BORDER_STYLE, CONTROL_BORDER_RADIUS } from "@/constants/styles";

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
          label={`Option ${item+1}`}
        />
      ))}
    </Select>
  );

  const settings = {
    variant: SELECT_VARIANT,
    color: SELECT_COLOR,
    size: SELECT_SIZE,
    width: ["auto", 200, 300, 400, "100%"],
    radius: CONTROL_BORDER_RADIUS,
    borderStyle: BORDER_STYLE,
    borderWidth: [...Array(5).keys()],
    fullwidth: props.fullwidth,
    disabled: props.disabled,
  };

  const getDefaultRadius = () => {
    if (props.size === "s") return 8;

    if (props.size === "l") return 16;

    return 12;
  };

  const childrenContent = `<SelectOption label="Option 1" />\n<SelectOption label="Option 2" />\n...`;

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