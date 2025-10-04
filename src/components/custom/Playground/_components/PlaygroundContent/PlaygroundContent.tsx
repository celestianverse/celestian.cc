import { Title } from "@/components/uikit/Title/Title";
import { Box } from "@/components/uikit/Box/Box";
import type { Props } from "./PlaygroundContent.types";

export const PlaygroundContent = (
  {
    dark = false,
    title,
    children
  }: Props) => {
  return (
    <Box
      variant={dark ? "flat" : "outline"}
      color="primary"
      tone={dark ? "base" : "soft"}
      borderWidth={dark ? 0 : 2}
      borderStyle={dark ? "none" : "dashed"}
      fullwidth
    >
      {title && (
        <Title size="s">
          {title}
        </Title>
      )}
      {children}
    </Box>
  );
};