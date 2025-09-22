import { Section } from "@/components/uikit/Section/Section";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Text } from "@/components/uikit/Text/Text";
import { Divider } from "@/components/uikit/Divider/Divider";
import { Row } from "@/components/uikit/Row/Row";
import { Tag } from "@/components/uikit/Tag/Tag";
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher/ThemeSwitcher";
import { FontSwitcher } from "@/components/custom/FontSwitcher/FontSwitcher";
import { contacts } from "@/data/contacts";
import { app } from "@/data/app";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

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
      <Row
        justify="space-between"
        gap="xl"
        className={styles.main}
      >
        <Logo color="contrast" />
        <Row gap="xs">
          <ThemeSwitcher color="contrast" />
          <FontSwitcher color="contrast" />
        </Row>
      </Row>
      <Divider
        variant="dash-soft"
        color="contrast"
      />
      <Row
        justify="space-between"
        gap="xl"
        className={styles.info}
      >
        <Text>{app.name} © {year}</Text>
        <Row className={styles.tags}>
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
