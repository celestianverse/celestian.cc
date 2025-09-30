import { Title } from "@/components/uikit/Title/Title";
import { Section } from "@/components/uikit/Section/Section";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Stack } from "./_components/Stack/Stack";
import { stack } from "@/data/stack";

export const StackSection = () => {
  return (
    <Section
      variant="gradient"
      color="contrast"
      align="center"
      radiusTop={96}
      overlapBottom={96}
      mobileRadiusTop={64}
    >
      <Title>{stack.title}</Title>
      <Grid>
        {stack.items.map((item) => (
          <Stack
            key={item.name}
            data={item}
          />
        ))}
      </Grid>
    </Section>
  );
};
