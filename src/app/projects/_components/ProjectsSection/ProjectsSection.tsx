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
          variant="gradient"
          color={index % 2 === 0 ? "contrast" : "primary"}
          tone={index % 2 === 0 ? "base" : "soft"}
          direction="row"
          align="center"
          justify="space-between"
          radiusTop={96}
          overlapBottom={96}
          tabletAlign="flex-end"
          mobileGap={48}
          mobileDirection="column"
          mobileAlign="center"
          mobileRadiusTop={64}
          className={styles.section}
        >
          <Column
            gap={48}
            mobileAlign="center"
          >
            <Column
              gap={24}
              mobileAlign="center"
            >
              <Tag
                size="s"
                tone="soft"
              >
                {item.tag}
              </Tag>
              <Column
                gap={16}
                mobileAlign="center"
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
              color="info"
              size="l"
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
