import { Title } from "@/components/uikit/Title/Title";
import { Section } from "@/components/uikit/Section/Section";
import type { Props } from "./IntroSection.types";

export const IntroSection = ({title, className}: Props) => {
  return (
    <Section
      color="brand"
      variant="gradient"
      align="center"
      justify="center"
      height="m"
      paddingY={0}
      overlapBottom={96}
      offsetHeader
      className={className}
    >
      <Title
        as="h2"
        size="l"
      >
        {title}
      </Title>
    </Section>
  );
};
