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
      radiusTop={96}
      overlapBottom={96}
      mobileRadiusTop={64}
    >
      <Title>{methodology.title}</Title>
      <Column gap={48}>
        {methodology.items.map((item, index) => (
          <Column
            key={item.title}
            as="article"
            gap={48}
          >
            {index !== 0 && (
              <Divider
                color="contrast"
                tone="soft"
                borderStyle="dashed"
                borderWidth={2}
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
