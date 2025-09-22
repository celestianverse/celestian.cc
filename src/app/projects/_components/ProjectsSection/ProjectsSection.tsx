import Image from "next/image";
import { Section } from "@/components/uikit/Section/Section";
import { Title } from "@/components/uikit/Title/Title";
import { Tag } from "@/components/uikit/Tag/Tag";
import { Column } from "@/components/uikit/Column/Column";
import { Button } from "@/components/uikit/Button/Button";
import { projects } from "@/data/projects";
import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <>
      {projects.items.map((item, index) => (
        <Section
          key={item.title}
          variant={index % 2 === 0 ? "fill" : "gradient"}
          color={index % 2 === 0 ? "contrast" : "neutral"}
          direction="row"
          align="center"
          justify="space-between"
          radiusTop="m"
          overlapBottom="m"
          classNameContainer={styles.container}
        >
          <Column
            gap="l"
            className={styles.content}
          >
            <Column
              gap="s"
              className={styles.info}
            >
              <Tag size="s">{item.tag}</Tag>
              <Column
                gap="xs"
                className={styles.titles}
              >
                <Title>
                  {item.title}
                </Title>
                <Title
                  as="h4"
                  size="xs"
                  whiteSpace="pre-line"
                >
                  {item.subtitle}
                </Title>
              </Column>
            </Column>
            <Button
              as="a"
              href={item.url}
              target="_blank"
              size="l"
              color="info"
              iconStart="arrowUpRight"
            >
              Open project
            </Button>
          </Column>
          <Image
            width={684}
            height={440}
            src={item.screenshot}
            alt={item.subtitle}
            quality={100}
            className={styles.image}
          />
        </Section>
      ))}
    </>
  );
};
