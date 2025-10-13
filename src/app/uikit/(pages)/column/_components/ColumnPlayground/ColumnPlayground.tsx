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
import { DEFAULT_PROPS, NAME } from "./ColumnPlayground.constants";
import type { ColumnProps } from "@/components/uikit/Column/Column.types";
import { Column } from "@/components/uikit/Column/Column";
import { FLEX_ELEMENT } from "@/components/uikit/Flex/Flex.constants";

export const ColumnPlayground = () => {
  const [props, setProps] = useState<ColumnProps>(DEFAULT_PROPS);

  const ColumnComponent = (
    <Column {...props}>
      <p>Content 1...</p>
      <p>Content 2...</p>
      <p>Content 3...</p>
    </Column>
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

  const code = buildComponentCode<ColumnProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.column.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.column.longTitle}
        component={ColumnComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};