"use client";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Grid } from "@/components/uikit/Grid/Grid";
import type { Color } from "@/types/Color";
import { uikit } from "@/data/uikit";

const MAIN_COLORS = [
  "primary",
  "secondary",
  "brand",
  "accent",
  "utility",
  "info",
  "success",
  "warning",
  "danger",
  "rating",
];

const CONTRAST_COLORS = [
  "contrast",
  "phantom",
];

export const ColorsPlayground = () => {
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
          gap={24}
          fullwidth
        >
          <Title size="s">
            {uikit.general.colors.title}
          </Title>
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
        </Column>
      </Box>
      <Box
        direction="row"
        fullwidth
        mobileDirection="column"
      >
        <Column
          gap={24}
          fullwidth
        >
          <Title size="s">
            {uikit.general.colors.subtitle}
          </Title>
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
        </Column>
      </Box>
    </Column>
  );
};