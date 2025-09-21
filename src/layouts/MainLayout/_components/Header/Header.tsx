import { Section } from "@/components/uikit/Section/Section";
import { Row } from "@/components/uikit/Row/Row";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Navigation } from "./_components/Navigation/Navigation";
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Section
      as="header"
      paddingY="none"
      direction="row"
      align="center"
      justify="space-between"
      className={styles.header}
    >
      <Logo />
      <Row gap="s">
        <Navigation />
        <ThemeSwitcher />
      </Row>
    </Section>
  );
};
