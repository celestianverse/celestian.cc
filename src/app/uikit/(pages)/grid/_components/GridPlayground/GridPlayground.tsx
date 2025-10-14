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
import { DEFAULT_PROPS, NAME } from "./GridPlayground.constants";
import type { GridProps } from "@/components/uikit/Grid/Grid.types";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Box } from "@/components/uikit/Box/Box";
import { GRID_COLUMNS } from "@/components/uikit/Grid/Grid.constants";

export const GridPlayground = () => {
  const [props, setProps] = useState<GridProps>(DEFAULT_PROPS);

  const GridComponent = (
    <Grid {...props}>
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
    </Grid>
  );

  const settings = {
    columns: GRID_COLUMNS,
    align: ALIGN_ITEMS,
    gap: GAP,
    fullwidth: props.fullwidth,
  };

  const code = buildComponentCode<GridProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
    children: "Content...",
  });

  return (
    <Playground.Root title={uikit.layout.grid.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.layout.grid.longTitle}
        component={GridComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};