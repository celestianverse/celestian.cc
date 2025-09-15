import { Section } from "@/components/uikit/Section/Section";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Text } from "@/components/uikit/Text/Text";

export const Footer = () => {

  return (
    <Section
      as="footer"
      variant="gradient"
      color="accent"
      direction="row"
      align="center"
      justify="space-between"
      paddingY="s"
      radiusTop="m"
    >
      <Logo color="contrast"></Logo>
      <Text>Celestian © 2025</Text>
    </Section>
  );
};
