import Image from "next/image";
import { Section } from "@/components/uikit/Section/Section";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { contacts } from "@/data/contacts";
import styles from "./MeSection.module.scss";
import { Title } from "@/components/uikit/Title/Title";
import { Button } from "@/components/uikit/Button/Button";

export const MeSection = () => {
  return (
    <Section
      color="contrast"
      direction="row"
      align="center"
      gap="l"
      radiusTop="m"
      overlapBottom="m"
    >
      <Box
        radius="l"
        padding="none"
        overflow="hidden"
      >
        <Image
          width={300}
          height={300}
          src={contacts.me.photo}
          alt={contacts.me.name}
          quality={100}
          className={styles.image}
        />
      </Box>
      <Column gap="l">
        <Column gap="s">
          <Column gap="none">
            <Title
              as="h3"
              size="s"
            >
              {contacts.me.positions.primary}
            </Title>
            <Title
              as="h3"
              size="s"
            >
              {contacts.me.positions.secondary}
            </Title>
          </Column>
          <Title
            as="h4"
            size="xs"
          >
            {contacts.me.name}
          </Title>
        </Column>
        <Button
          as="a"
          href={contacts.me.resume.href}
          target="_blank"
          size="l"
          color="info"
          iconStart="download"
        >
          {contacts.me.resume.label}
        </Button>
      </Column>
    </Section>
  );
};
