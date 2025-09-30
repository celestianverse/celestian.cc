"use client";
import { useState } from "react";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { Field } from "@/components/uikit/Field/Field";
import { Switch } from "@/components/uikit/Switch/Switch";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import type { AnchorPadding, AnchorProps, AnchorSize, AnchorVariant } from "@/components/uikit/Anchor/Anchor.types";
import type { IconKeys } from "@/components/uikit/Icon/Icon.types";
import type { BorderStyle, BorderWidth } from "@/types/Styles";
import type { Color } from "@/types/Color";
import { ANCHOR_PADDING, ANCHOR_SIZE, ANCHOR_VARIANT } from "@/components/uikit/Anchor/Anchor.constants";
import { BORDER_STYLE } from "@/constants/styles";
import { COLORS } from "@/constants/colors";
import { ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";

const INPUT_WIDTH = 160;
const LABEL_WIDTH = 96;

export const AnchorPlayground = () => {
  const [props, setProps] = useState<AnchorProps>({
    variant: "base",
    color: "primary",
    size: "m",
    padding: "none",
    borderStyle: "none",
    borderWidth: 0,
    iconStart: "none",
    iconEnd: "none",
    iconOnly: "none",
    fullwidth: false,
    active: false,
    disabled: false,
    className: "",
  });

  const AnchorComponent = (
    <Anchor
      {...props}
    >
      Anchor
    </Anchor>
  );

  const handleAnchorVariant = (value) => {
    const isOutline = value === "outline";

    setProps(prev => ({
      ...prev,
      variant: value as AnchorVariant,
      borderStyle: isOutline ? "solid" : "none",
      borderWidth: isOutline ? 1 : 0,
    }));
  };

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
      >
        <Column fullwidth>
          <Title size="s">
            {uikit.pages.controls.anchor.title}
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
              {AnchorComponent}
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
              {AnchorComponent}
            </Box>
          </Column>
        </Column>
        <Column gap={16}>
          <Field
            label="variant"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.variant}
              width={INPUT_WIDTH}
              onChange={handleAnchorVariant}
            >
              {ANCHOR_VARIANT.map(variant => (
                <SelectOption
                  key={variant}
                  label={variant}
                />
              ))}
            </Select>
          </Field>
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
              onChange={(value) => setProps(prev => ({...prev, size: value as AnchorSize}))}
            >
              {ANCHOR_SIZE.map(size => (
                <SelectOption
                  key={size}
                  label={size}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="padding"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.padding}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, padding: value as AnchorPadding}))}
            >
              {ANCHOR_PADDING.map(padding => (
                <SelectOption
                  key={padding}
                  label={padding}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="borderStyle"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.borderStyle}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, borderStyle: value as BorderStyle}))}
            >
              {BORDER_STYLE.map(borderStyle => (
                <SelectOption
                  key={borderStyle}
                  label={borderStyle}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="borderWidth"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={String(props.borderWidth)}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, borderWidth: Number(value) as BorderWidth}))}
            >
              {[...Array(11).keys()].map(borderWidth => (
                <SelectOption
                  key={borderWidth}
                  label={String(borderWidth)}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="iconStart"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.iconStart}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, iconStart: value as IconKeys}))}
            >
              {Object.keys(ICONS).map(icon => (
                <SelectOption
                  key={icon}
                  label={icon}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="iconEnd"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.iconEnd}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, iconEnd: value as IconKeys}))}
            >
              {Object.keys(ICONS).map(icon => (
                <SelectOption
                  key={icon}
                  label={icon}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="iconOnly"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.iconOnly}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, iconOnly: value as IconKeys}))}
            >
              {Object.keys(ICONS).map(icon => (
                <SelectOption
                  key={icon}
                  label={icon}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="fullwidth"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch onCheckedChange={(value) => setProps(prev => ({...prev, fullwidth: value}))}/>
          </Field>
          <Field
            label="disabled"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch onCheckedChange={(value) => setProps(prev => ({...prev, disabled: value}))}/>
          </Field>
        </Column>
      </Box>
    </Column>
  );
};