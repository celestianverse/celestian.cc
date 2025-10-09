"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import type { ButtonProps } from "@/components/uikit/Button/Button.types";
import { CONTROL_BORDER_RADIUS, CONTROL_SIZE, TONE } from "@/constants/styles";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./SegmentsPlayground.constants";
import { Segments } from "@/components/uikit/Segments/Segments";
import { COLORS } from "@/constants/colors";
import { uikit } from "@/data/uikit";

export const SegmentsPlayground = () => {
  const [props, setProps] = useState<ButtonProps>(DEFAULT_CHOSEN_PROPS);

  const [isActive, setIsActive] = useState(1);

  const getSegmentsColor = () => {
    if (props.color === "contrast" || props.color === "phantom") return "contrast";

    return "primary";
  };

  const SegmentsComponentLight = (
    <Segments
      color={getSegmentsColor()}
      radius={props.radius}
      fullwidth={props.fullwidth}
    >
      {[...Array(3).keys()].map(item => {
        item += 1;
        const getColor = (item) => {
          if (isActive === item) return props.color;

          if (props.color === "contrast" || props.color === "phantom") return "contrast";

          return "primary";
        };

        return (
          <Button
            key={item}
            variant="ghost"
            color={getColor(item)}
            tone={props.tone}
            size={props.size}
            radius={props.radius}
            active={isActive === item}
            onClick={() => setIsActive(item)}
          >
            Segment {item}
          </Button>
        );
      })}
    </Segments>
  );

  const SegmentsComponentDark = (
    <Segments
      color="contrast"
      radius={props.radius}
      fullwidth={props.fullwidth}
    >
      {[...Array(3).keys()].map(item => {
        item += 1;
        const getColor = (item) => {
          if (isActive === item) return props.color;

          return "contrast";
        };

        return (
          <Button
            key={item}
            variant="ghost"
            color={getColor(item)}
            tone={props.tone}
            size={props.size}
            radius={props.radius}
            active={isActive === item}
            onClick={() => setIsActive(item)}
          >
            Segment {item}
          </Button>
        );
      })}
    </Segments>
  );

  const settings = {
    color: COLORS,
    tone: TONE,
    size: CONTROL_SIZE,
    radius: CONTROL_BORDER_RADIUS,
    fullwidth: props.fullwidth,
  };

  const getDefaultRadius = () => {
    if (props.size === "s") {
      return 8;
    }

    if (props.size === "l") return 16;

    return 12;
  };

  useEffect(() => {
    if (props.size === "s") {
      setProps(prev => ({ ...prev, radius: 8 }));
    } else if (props.size === "l") {
      setProps(prev => ({ ...prev, radius: 16 }));
    } else {
      setProps(prev => ({ ...prev, radius: 12 }));
    }
  }, [props.size]);

  const codeSegment1 = buildComponentCode<ButtonProps>({
    name: "Button",
    props: {variant: "ghost", color: props.color, tone: props.tone, size: props.size, radius: props.radius, active: true},
    defaults: {...DEFAULT_PROPS, radius: getDefaultRadius()},
    children: "Segment 1",
  });

  const codeSegment2 = buildComponentCode<ButtonProps>({
    name: "Button",
    props: {variant: "ghost", color: getSegmentsColor(), tone: props.tone, size: props.size, radius: props.radius},
    defaults: {...DEFAULT_PROPS, radius: getDefaultRadius()},
    children: "Segment 2",
  });

  const code = buildComponentCode<ButtonProps>({
    name: NAME,
    props: {color: getSegmentsColor(), radius: props.radius, fullwidth: props.fullwidth},
    defaults: {...DEFAULT_PROPS, radius: getDefaultRadius()},
    children: `${codeSegment1}\n${codeSegment2}`,
  });

  return (
    <Playground.Root title={uikit.controls.segments.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.controls.segments.longTitle}
        component={SegmentsComponentLight}
        componentLight={SegmentsComponentLight}
        componentDark={SegmentsComponentDark}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};