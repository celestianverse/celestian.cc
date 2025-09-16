import { Title } from "@/components/uikit/Title/Title";
import { Section } from "@/components/uikit/Section/Section";
import type { Props } from "./IntroSection.types";

export const IntroSection = ({title, className}: Props) => {
  return (
    <Section
      color="brand"
      variant="gradient"
      align="center"
      height="m"
      paddingY="none"
      overlapBottom="m"
      offsetHeader
      className={className}
    >
      <Title
        as="h2"
        size="hero"
      >
        {title}
      </Title>
    </Section>
  );
};
