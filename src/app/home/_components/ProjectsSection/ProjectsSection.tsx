"use client";
import { Section } from "@/components/uikit/Section/Section";
import { Title } from "@/components/uikit/Title/Title";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Box } from "@/components/uikit/Box/Box";
import { Row } from "@/components/uikit/Row/Row";
import { Tag } from "@/components/uikit/Tag/Tag";
import { Icon } from "@/components/uikit/Icon/Icon";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { projects } from "@/data/projects";
import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  const theme = useUserContext((state) => state.theme);

  return (
    <Section
      color="contrast"
      justify="center"
      align="center"
      gap="xl"
      radiusTop="m"
      overlapBottom="m"
    >
      <Title>{projects.title}</Title>
      <Grid columns={2}>
        {projects.items.map((item) => (
          <Box
            key={item.title}
            as="a"
            href={item.url}
            target="_blank"
            color="primary"
            variant="dash-soft"
            justify="space-between"
            hoverable
            className={styles.box}
          >
            <Row justify="space-between">
              <img
                src={theme === "dark" ? item.logo.dark : item.logo.light}
                alt={item.subtitle}
              />
              <Tag size="s">{item.tag}</Tag>
            </Row>
            <Row
              align="end"
              justify="space-between"
            >
              <Title
                as="h4"
                size="xs"
                whiteSpace="pre-line"
              >
                {item.subtitle}
              </Title>
              <Icon
                name="arrowUpRight"
                size="l"
              />
            </Row>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};
