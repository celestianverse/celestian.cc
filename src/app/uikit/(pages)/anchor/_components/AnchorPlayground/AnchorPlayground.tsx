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
import type { AnchorProps, AnchorSize, AnchorVariant } from "@/components/uikit/Anchor/Anchor.types";
import type { IconKeys } from "@/components/uikit/Icon/Icon.types";
import type { BorderStyle, BorderWidth, Padding } from "@/types/Styles";
import type { Color } from "@/types/Color";
import { ANCHOR_SIZE, ANCHOR_VARIANT } from "@/components/uikit/Anchor/Anchor.constants";
import { INPUT_WIDTH, LABEL_WIDTH } from "@/constants/playground";
import { BORDER_STYLE, PADDING } from "@/constants/styles";
import { COLORS } from "@/constants/colors";
import { ICONS } from "@/components/uikit/Icon/Icon.constants";
import { uikit } from "@/data/uikit";

export const AnchorPlayground = () => {
  const [props, setProps] = useState<AnchorProps>({
    variant: "base",
    color: "info",
    size: "m",
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

  const setVariant = (value) => {
    const isOutline = value === "outline";

    setProps(prev => ({
      ...prev,
      variant: value as AnchorVariant,
      borderStyle: isOutline ? "solid" : "none",
      borderWidth: isOutline ? 1 : 0,
    }));
  };

  const setPadding = (value) => {
    setProps(prev => ({
      ...prev,
      padding: Number(value) as Padding,
      paddingY: undefined,
      paddingX: undefined,
    }));
  };

  const setPaddingY = (value) => {
    setProps(prev => ({
      ...prev,
      padding: undefined,
      paddingY: Number(value) as Padding,
    }));
  };

  const setPaddingX = (value) => {
    setProps(prev => ({
      ...prev,
      padding: undefined,
      paddingX: Number(value) as Padding,
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
        mobileDirection="column"
      >
        <Column
          gap={0}
          fullwidth
        >
          <Title size="s">
            {uikit.controls.anchor.title}
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
        <Column
          align="stretch"
          gap={16}
        >
          <Field
            label="variant"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.variant}
              width={INPUT_WIDTH}
              onChange={setVariant}
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
              value={props.padding ? String(props.padding) : "Select..."}
              width={INPUT_WIDTH}
              onChange={setPadding}
            >
              {PADDING.map(padding => (
                <SelectOption
                  key={padding}
                  label={String(padding)}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="paddingY"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.paddingY ? String(props.paddingY) : "Select..."}
              width={INPUT_WIDTH}
              onChange={setPaddingY}
            >
              {PADDING.map(padding => (
                <SelectOption
                  key={padding}
                  label={String(padding)}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="paddingX"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.paddingX ? String(props.paddingX) : "Select..."}
              width={INPUT_WIDTH}
              onChange={setPaddingX}
            >
              {PADDING.map(padding => (
                <SelectOption
                  key={padding}
                  label={String(padding)}
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
            <Switch
              size="s"
              onChange={(value) => setProps(prev => ({...prev, fullwidth: value}))}
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