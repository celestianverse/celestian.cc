import Image from "next/image";
import { Section } from "@/components/uikit/Section/Section";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Button } from "@/components/uikit/Button/Button";
import { contacts } from "@/data/contacts";

export const MeSection = () => {
  return (
    <Section
      variant="gradient"
      color="contrast"
      direction="row"
      align="center"
      gap={48}
      radiusTop={96}
      overlapBottom={96}
      mobileDirection="column-reverse"
      mobileRadiusTop={64}
    >
      <Box
        radius={32}
        padding={0}
        overflow="hidden"
      >
        <Image
          width={300}
          height={300}
          src={contacts.me.photo}
          alt={contacts.me.name}
          quality={100}
        />
      </Box>
      <Column
        gap={48}
        mobileAlign="center"
      >
        <Column
          gap={24}
          mobileAlign="center"
        >
          <Column
            gap={4}
            mobileAlign="center"
          >
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
      </Column>
    </Section>
  );
};
