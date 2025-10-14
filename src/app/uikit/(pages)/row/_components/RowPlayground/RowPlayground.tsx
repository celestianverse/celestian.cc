"use client";
import { useState } from "react";
import {
  ALIGN_ITEMS,
  FLEX_WRAP,
  GAP,
  JUSTIFY_CONTENT,
  OVERFLOW,
} from "@/constants/styles";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_PROPS, NAME } from "./RowPlayground.constants";
import type { RowProps } from "@/components/uikit/Row/Row.types";
import { Row } from "@/components/uikit/Row/Row";
import { FLEX_ELEMENT } from "@/components/uikit/Flex/Flex.constants";
import { Box } from "@/components/uikit/Box/Box";

export const RowPlayground = () => {
  const [props, setProps] = useState<RowProps>(DEFAULT_PROPS);

  const RowComponent = (
    <Row {...props}>
      <Box
        color="primary"
        tone="soft"
        radius={8}
      />
      <Box
        color="primary"
        tone="soft"
        radius={8}
      />
      <Box
        color="primary"
        tone="soft"
        radius={8}
      />
    </Row>
  );

  const settings = {
    as: FLEX_ELEMENT,
    overflow: OVERFLOW,
    align: ALIGN_ITEMS,
    justify: JUSTIFY_CONTENT,
    wrap: FLEX_WRAP,
    grow: [...Array(2).keys()],
    gap: GAP,
    fullwidth: props.fullwidth,
  };

  const code = buildComponentCode<RowProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.row.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.row.longTitle}
        component={RowComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};