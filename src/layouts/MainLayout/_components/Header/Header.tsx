import { Section } from "@/components/uikit/Section/Section";
import { Row } from "@/components/uikit/Row/Row";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Navigation } from "./_components/Navigation/Navigation";
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher/ThemeSwitcher";
import { Hidden } from "@/components/uikit/Hidden/Hidden";
import { Burger } from "./_components/Burger/Burger";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Section
      as="header"
      paddingY={0}
      direction="row"
      align="center"
      justify="space-between"
      className={styles.header}
    >
      <Logo />
      <Row
        align="center"
        gap={24}
      >
        <Hidden on="tablet-max">
          <Navigation />
        </Hidden>
        <ThemeSwitcher />
        <Hidden on="laptop-min">
          <Burger />
        </Hidden>
      </Row>
    </Section>
  );
};
