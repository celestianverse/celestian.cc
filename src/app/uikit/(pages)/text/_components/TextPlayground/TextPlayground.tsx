"use client";
import { useState } from "react";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Text } from "@/components/uikit/Text/Text";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { Field } from "@/components/uikit/Field/Field";
import { Switch } from "@/components/uikit/Switch/Switch";
import type { Color } from "@/types/Color";
import type { FontWeight, LineHeight, WhiteSpace } from "@/types/Styles";
import type { TextProps, TextSize } from "@/components/uikit/Text/Text.types";
import { INPUT_WIDTH, LABEL_WIDTH } from "@/constants/playground";
import { FONT_WEIGHT, LINE_HEIGHT, WHITE_SPACE } from "@/constants/styles";
import { TEXT_SIZE } from "@/components/uikit/Text/Text.constants";
import { COLORS } from "@/constants/colors";
import { uikit } from "@/data/uikit";

export const TextPlayground = () => {
  const [props, setProps] = useState<TextProps>({
    color: "inherit",
    size: "m",
    weight: "regular",
    lineHeight: "m",
    whiteSpace: "normal",
    uppercase: false,
    lowercase: false,
    ellipsis: false,
    className: "",
  });

  const TextComponent = (
    <Text {...props}>
      Text
    </Text>
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
            {uikit.typography.text.title}
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
              {TextComponent}
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
              {TextComponent}
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
              {["inherit", ...COLORS].map(color => (
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
              onChange={(value) => setProps(prev => ({...prev, size: value as TextSize}))}
            >
              {TEXT_SIZE.map(size => (
                <SelectOption
                  key={size}
                  label={size}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="weight"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.weight}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, weight: value as FontWeight}))}
            >
              {FONT_WEIGHT.map(weight => (
                <SelectOption
                  key={weight}
                  label={weight}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="lineHeight"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.lineHeight}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, lineHeight: value as LineHeight}))}
            >
              {LINE_HEIGHT.map(lineHeight => (
                <SelectOption
                  key={lineHeight}
                  label={lineHeight}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="whiteSpace"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Select
              value={props.whiteSpace}
              width={INPUT_WIDTH}
              onChange={(value) => setProps(prev => ({...prev, whiteSpace: value as WhiteSpace}))}
            >
              {WHITE_SPACE.map(whiteSpace => (
                <SelectOption
                  key={whiteSpace}
                  label={whiteSpace}
                />
              ))}
            </Select>
          </Field>
          <Field
            label="uppercase"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch
              size="s"
              onChange={(value) => setProps(prev => ({...prev, uppercase: value}))}
            />
          </Field>
          <Field
            label="lowercase"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch
              size="s"
              onChange={(value) => setProps(prev => ({...prev, lowercase: value}))}
            />
          </Field>
          <Field
            label="ellipsis"
            labelPosition="left"
            labelWidth={LABEL_WIDTH}
          >
            <Switch
              size="s"
              onChange={(value) => setProps(prev => ({...prev, ellipsis: value}))}
            />
          </Field>
        </Column>
      </Box>
    </Column>
  );
};