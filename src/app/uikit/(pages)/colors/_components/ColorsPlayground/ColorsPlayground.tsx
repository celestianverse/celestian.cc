"use client";
import { Box } from "@/components/uikit/Box/Box";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Playground } from "@/components/custom/Playground/Playground";
import { CONTRAST_COLORS, MAIN_COLORS } from "./ColorsPlayground.constants";
import type { Color } from "@/types/Color";
import { uikit } from "@/data/uikit";

export const ColorsPlayground = () => {
  return (
    <Playground.Root title={uikit.meta.colors.title}>
      <Playground.Content title={uikit.meta.colors.titleMain}>
        <Grid
          columns={5}
          gap={16}
        >
          {MAIN_COLORS.map(color => (
            <Box
              key={color}
              color={color as Color}
              align="center"
              justify="center"
              paddingX={0}
              radius={16}
            >
              {color}
            </Box>
          ))}
        </Grid>
      </Playground.Content>
      <Playground.Content
        dark
        title={uikit.meta.colors.titleContrast}
      >
        <Grid
          columns={5}
          gap={16}
        >
          {CONTRAST_COLORS.map(color => (
            <Box
              key={color}
              color={color as Color}
              align="center"
              justify="center"
              paddingX={0}
              radius={16}
            >
              {color}
            </Box>
          ))}
        </Grid>
      </Playground.Content>
    </Playground.Root>
  );
};