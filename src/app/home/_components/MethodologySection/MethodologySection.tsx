import { Section } from "@/components/uikit/Section/Section";
import { Title } from "@/components/uikit/Title/Title";
import { Text } from "@/components/uikit/Text/Text";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Divider } from "@/components/uikit/Divider/Divider";
import { Column } from "@/components/uikit/Column/Column";
import { methodology } from "@/data/methodology";

export const MethodologySection = () => {
  return (
    <Section
      variant="gradient"
      color="info"
      justify="center"
      align="center"
      gap="xl"
      radiusTop="m"
      overlapBottom="m"
    >
      <Title>{methodology.title}</Title>
      <Column gap="l">
        {methodology.items.map((item, index) => (
          <Column
            key={item.title}
            as="article"
            gap="l"
          >
            {index !== 0 && (
              <Divider
                variant="dash-soft"
                color="contrast"
              />
            )}
            <Grid

              columns={2}
            >
              <Title
                as="h4"
                size="xs"
              >
                {item.title}
              </Title>
              <Text>
                {item.text}
              </Text>
            </Grid>
          </Column>
        ))}
      </Column>
    </Section>
  );
};
