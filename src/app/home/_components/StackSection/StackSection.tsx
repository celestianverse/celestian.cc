import Image from "next/image";
import { Title } from "@/components/uikit/Title/Title";
import { Section } from "@/components/uikit/Section/Section";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Box } from "@/components/uikit/Box/Box";
import { Row } from "@/components/uikit/Row/Row";
import { Column } from "@/components/uikit/Column/Column";
import { stack } from "@/data/stack";
import styles from "./StackSection.module.scss";

export const StackSection = () => {
  return (
    <Section
      color="contrast"
      justify="center"
      align="center"
      gap="xl"
      radiusTop="m"
      overlapBottom="m"
    >
      <Title>{stack.title}</Title>
      <Grid>
        {stack.items.map((item) => (
          <Box
            key={item.name}
            as="article"
            color="primary"
            variant="dash-soft"
            justify="space-between"
            gap="xxs"
            className={styles.box}
          >
            <Column gap="xxs">
              {item.titles.map((title) => (
                <Title
                  key={title}
                  as="h4"
                  size="xs"
                >
                  {title}
                </Title>
              ))}
            </Column>
            <Row justify="end">
              <Image
                width={72}
                height={72}
                src={item.image}
                alt={item.name}
                quality={100}
                className={styles.image}
              />
            </Row>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};
