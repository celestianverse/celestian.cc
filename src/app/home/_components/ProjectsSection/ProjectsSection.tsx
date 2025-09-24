"use client";
import { Section } from "@/components/uikit/Section/Section";
import { Title } from "@/components/uikit/Title/Title";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Box } from "@/components/uikit/Box/Box";
import { Row } from "@/components/uikit/Row/Row";
import { Tag } from "@/components/uikit/Tag/Tag";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Hidden } from "@/components/uikit/Hidden/Hidden";
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
      radiusTop={96}
      overlapBottom={96}
      mobileRadiusTop={64}
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
            variant="outline"
            tone="soft"
            borderStyle="dashed"
            borderWidth={2}
            justify="space-between"
            hoverable
            className={styles.box}
          >
            <Row justify="space-between">
              <img
                src={theme === "dark" ? item.logo.dark : item.logo.light}
                alt={item.subtitle}
              />
              <Hidden on="mobile-only">
                <Tag
                  size="s"
                  tone="soft"
                >
                  {item.tag}
                </Tag>
              </Hidden>
              <Hidden on="tablet-min">
                <Icon
                  name="arrowUpRight"
                  size="l"
                />
              </Hidden>
            </Row>
            <Row
              align="flex-end"
              justify="space-between"
            >
              <Title
                as="h4"
                size="xs"
                whiteSpace="pre-line"
                className={styles.subtitle}
              >
                {item.subtitle}
              </Title>
              <Hidden on="mobile-only">
                <Icon
                  name="arrowUpRight"
                  size="l"
                />
              </Hidden>
            </Row>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};
