import { Column } from "@/components/uikit/Column/Column";
import type { Props } from "./PlaygroundRoot.types";
import { Hidden } from "@/components/uikit/Hidden/Hidden";
import { Title } from "@/components/uikit/Title/Title";

export const PlaygroundRoot = ({title, children}: Props) => {
  return (
    <Column
      gap={48}
      fullwidth
      tabletAlign="center"
    >
      <Hidden on="laptop-min">
        <Title size="m">
          {title}
        </Title>
      </Hidden>
      <Column
        gap={24}
        fullwidth
      >
        {children}
      </Column>
    </Column>
  );
};