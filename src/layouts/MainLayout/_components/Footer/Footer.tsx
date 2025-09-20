import { Section } from "@/components/uikit/Section/Section";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Text } from "@/components/uikit/Text/Text";
import { Divider } from "@/components/uikit/Divider/Divider";
import { Row } from "@/components/uikit/Row/Row";
import { Tag } from "@/components/uikit/Tag/Tag";
import { contacts } from "@/data/contacts";

export const Footer = () => {

  return (
    <Section
      as="footer"
      variant="gradient"
      color="accent"
      gap="l"
      paddingTop="m"
      paddingBottom="xs"
      radiusTop="m"
    >
      <Row justify="space-between">
        <Logo color="contrast"></Logo>
      </Row>
      <Divider
        variant="dash-soft"
        color="contrast"
      />
      <Row justify="space-between">
        <Text>Celestian © 2025</Text>
        <Row>
          <Tag
            variant="ghost"
            color="contrast"
            iconStart="telegram"
          >
            {contacts.telegram.name}
          </Tag>
          <Tag
            variant="ghost"
            color="contrast"
            iconStart="email"
          >
            {contacts.email.subtitle}
          </Tag>
        </Row>
      </Row>
    </Section>
  );
};
