"use client";
import { useState } from "react";
import {
  ALIGN_ITEMS,
  FLEX_DIRECTION,
  FLEX_WRAP,
  GAP,
  JUSTIFY_CONTENT,
  OVERFLOW,
  PADDING,
  TONE
} from "@/constants/styles";
import { COLOR_WITH_TRANSPARENT } from "@/constants/color";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./SectionPlayground.constants";
import type { SectionProps } from "@/components/uikit/Section/Section.types";
import { Section } from "@/components/uikit/Section/Section";
import { SECTION_BORDER_RADIUS, SECTION_HEIGHT, SECTION_VARIANT } from "@/components/uikit/Section/Section.constants";

export const SectionPlayground = () => {
  const [props, setProps] = useState<SectionProps>(DEFAULT_CHOSEN_PROPS);

  const SectionComponent = (
    <Section {...props}>
      Content...
    </Section>
  );

  const settings = {
    variant: SECTION_VARIANT,
    color: COLOR_WITH_TRANSPARENT,
    tone: TONE,
    overflow: OVERFLOW,
    direction: FLEX_DIRECTION,
    align: ALIGN_ITEMS,
    justify: JUSTIFY_CONTENT,
    wrap: FLEX_WRAP,
    grow: [...Array(2).keys()],
    gap: GAP,
    height: SECTION_HEIGHT,
    paddingY: PADDING,
    paddingTop: PADDING,
    paddingBottom: PADDING,
    radius: SECTION_BORDER_RADIUS,
    radiusTop: SECTION_BORDER_RADIUS,
    radiusBottom: SECTION_BORDER_RADIUS,
    overlapBottom: SECTION_BORDER_RADIUS,
    offsetHeader: props.offsetHeader,
  };

  const code = buildComponentCode<SectionProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.section.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.section.longTitle}
        component={SectionComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};