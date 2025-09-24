import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/uikit/Title/Title";
import { Row } from "@/components/uikit/Row/Row";
import { Button } from "@/components/uikit/Button/Button";
import { Section } from "@/components/uikit/Section/Section";
import { Column } from "@/components/uikit/Column/Column";
import { Hidden } from "@/components/uikit/Hidden/Hidden";
import { hero } from "@/data/hero";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <Section
      color="brand"
      variant="gradient"
      direction="row"
      align="center"
      justify="space-between"
      height="l"
      overlapBottom={96}
      offsetHeader
    >
      <Column gap={64}>
        <Column gap={16}>
          <Title
            as="h1"
            size="xl"
          >
            {hero.title}
          </Title>
          <Title
            as="h2"
            size="l"
          >
            {hero.subtitle}
          </Title>
        </Column>
        <Row
          wrap="wrap"
          gap={24}
        >
          <Button
            as={Link}
            href={hero.projects.path}
            size="l"
            color="primary"
            className={styles.button}
          >
            {hero.projects.label}
          </Button>
          <Button
            as={Link}
            href={hero.contacts.path}
            size="l"
            variant="outline"
            color="primary"
            borderStyle="dashed"
            borderWidth={2}
            className={styles.button}
          >
            {hero.contacts.label}
          </Button>
        </Row>
      </Column>
      <Hidden on="tablet-max">
        <Image
          width={340}
          height={340}
          src={hero.image}
          alt={hero.title}
          quality={100}
          className={styles.image}
        />
      </Hidden>
    </Section>
  );
};
