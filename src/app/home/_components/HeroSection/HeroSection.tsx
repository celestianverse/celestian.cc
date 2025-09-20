import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/uikit/Title/Title";
import { Row } from "@/components/uikit/Row/Row";
import { Button } from "@/components/uikit/Button/Button";
import { Section } from "@/components/uikit/Section/Section";
import { Column } from "@/components/uikit/Column/Column";
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
      overlapBottom="m"
      offsetHeader
    >
      <Column gap="xl">
        <Column gap="xs">
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
        <Row gap="s">
          <Button
            as={Link}
            href={hero.projects.path}
            size="l"
            color="primary"
            variant="fill"
          >
            {hero.projects.label}
          </Button>
          <Button
            as={Link}
            href={hero.contacts.path}
            size="l"
            color="primary"
            variant="dash"
          >
            {hero.contacts.label}
          </Button>
        </Row>
      </Column>
      <Image
        width={340}
        height={340}
        src={hero.image}
        alt={hero.title}
        quality={100}
        className={styles.image}
      />
    </Section>
  );
};
