"use client";
import { useState } from "react";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./FieldPlayground.constants";
import type { FieldProps } from "@/components/uikit/Field/Field.types";
import { Field } from "@/components/uikit/Field/Field";
import { FIELD_ELEMENT, FIELD_POSITION } from "@/components/uikit/Field/Field.constants";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { Select } from "@/components/uikit/Select/Select";

export const FieldPlayground = () => {
  const [props, setProps] = useState<FieldProps>(DEFAULT_CHOSEN_PROPS);

  const FieldComponentLight = (
    <Field {...props}>
      <Select width={200}>
        <SelectOption label="Option 1" />
        <SelectOption label="Option 2" />
        <SelectOption label="Option 3" />
        <SelectOption label="Option 4" />
        <SelectOption label="Option 5" />
      </Select>
    </Field>
  );

  const FieldComponentDark = (
    <Field {...props}>
      <Select
        color="contrast"
        width={200}
      >
        <SelectOption label="Option 1" />
        <SelectOption label="Option 2" />
        <SelectOption label="Option 3" />
        <SelectOption label="Option 4" />
        <SelectOption label="Option 5" />
      </Select>
    </Field>
  );

  const settings = {
    as: FIELD_ELEMENT,
    labelPosition: FIELD_POSITION,
    labelWidth: [100, 200],
  };

  const code = buildComponentCode<FieldProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Input...",
  });

  return (
    <Playground.Root title={uikit.controls.field.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.controls.field.longTitle}
        component={FieldComponentLight}
        componentLight={FieldComponentLight}
        componentDark={FieldComponentDark}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};