import { Section } from "@/components/uikit/Section/Section";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Text } from "@/components/uikit/Text/Text";
import { Divider } from "@/components/uikit/Divider/Divider";
import { Row } from "@/components/uikit/Row/Row";
import { Tag } from "@/components/uikit/Tag/Tag";
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher/ThemeSwitcher";
import { FontSwitcher } from "@/components/custom/FontSwitcher/FontSwitcher";
import { contacts } from "@/data/contacts";
import { app } from "@/configs/app";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section
      as="footer"
      variant="gradient"
      color="accent"
      gap={48}
      paddingBottom={48}
      radiusTop={96}
      mobileRadiusTop={64}
    >
      <Row
        gap={64}
        justify="space-between"
        mobileDirection="column"
      >
        <Logo color="contrast" />
        <Row
          justify="flex-end"
          gap={16}
        >
          <ThemeSwitcher color="contrast" />
          <FontSwitcher color="contrast" />
        </Row>
      </Row>
      <Divider
        color="contrast"
        tone="soft"
        borderStyle="dashed"
        borderWidth={2}
      />
      <Row
        gap={64}
        justify="space-between"
        mobileDirection="column-reverse"
      >
        <Text>{app.name} © {year}</Text>
        <Row
          justify="flex-end"
          mobileDirection="column"
          mobileAlign="flex-start"
        >
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
