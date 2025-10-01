"use client";
import { useState } from "react";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { Field } from "@/components/uikit/Field/Field";
import { Switch } from "@/components/uikit/Switch/Switch";
import type { Color } from "@/types/Color";
import { INPUT_WIDTH, LABEL_WIDTH } from "@/constants/playground";
import { COLORS } from "@/constants/colors";
import { uikit } from "@/data/uikit";
import type { SwitchProps, SwitchSize } from "@/components/uikit/Switch/Switch.types";
import { SWITCH_SIZE } from "@/components/uikit/Switch/Switch.constants";

export const SwitchPlayground = () => {
  const [props, setProps] = useState<SwitchProps>({
    color: "success",
    size: "m",
    checked: true,
    disabled: false,
    className: "",
  });

  const SwitchComponent = (
    <Switch
      {...props}
      onChange={(value) => setProps(prev => ({...prev, checked: value}))}
    />
  );

  return (
    <Column
      gap={24}
      fullwidth
    >
      <Box
        variant="outline"
        tone="soft"
        borderWidth={2}
        borderStyle="dashed"
        direction="row"
        fullwidth
        mobileDirection="column"
      >
        <Column
          gap={0}
          fullwidth
        >
          <Title size="s">
            {uikit.controls.switch.title}
          </Title>
          <Column
            gap={16}
            grow={1}
            fullwidth
          >
            <Box
              color="transparent"
              padding={32}
              fullwidth
              align="center"
              justify="center"
              grow={1}
            >
              {SwitchComponent}
            </Box>
            <Box
              color="primary"
              tone="base"
              padding={32}
              fullwidth
              align="center"
              justify="center"
              grow={1}
            >
              {SwitchComponent}
            </Box>
          </Column>
        </Column>
        <Column
          align="stretch"
          gap={16}
        >
          <Field
            label="color"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.color}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, color: value as Color}))}
            >
              {COLORS.map(color => (
                <SelectOption
                  key={color}
                  label={color}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="size"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.size}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, size: value as SwitchSize}))}
            >
              {SWITCH_SIZE.map(size => (
                <SelectOption
                  key={size}
                  label={size}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="checked"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch
              size="s"
              checked={props.checked}
              onChange={(value) => setProps(prev => ({...prev, checked: value}))}
            />
          </Field>
          <Field
            label="disabled"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch
              size="s"
              onChange={(value) => setProps(prev => ({...prev, disabled: value}))}
            />
          </Field>
        </Column>
      </Box>
    </Column>
  );
};