"use client";
import Link from "next/link";
import { Box } from "@/components/uikit/Box/Box";
import { Title } from "@/components/uikit/Title/Title";
import { Column } from "@/components/uikit/Column/Column";
import { Button } from "@/components/uikit/Button/Button";
import { useIsActivePath } from "@/hooks/useActivePage";
import { uikitNavigation } from "@/configs/uikitNavigation";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const isActivePath = useIsActivePath();

  return (
    <Box
      as="aside"
      variant="outline"
      color="primary"
      tone="soft"
      borderStyle="dashed"
      borderWidth={2}
      className={styles.sidebar}
    >
      {Object.values(uikitNavigation).map((section) => {
        return (
          <Column
            key={section.title}
            align="stretch"
            gap={16}
            fullwidth
          >
            <Title
              as="h4"
              size="xs"
            >
              {section.title}
            </Title>
            <Column
              as="ul"
              align="stretch"
              gap={4}
              fullwidth
            >
              {Object.values(section.pages).map((page) => {
                return (
                  <li key={page.title}>
                    <Button
                      as={Link}
                      href={page.path}
                      variant="ghost"
                      tone="soft"
                      justify="flex-start"
                      fullwidth
                      active={isActivePath(page.path)}
                    >
                      {page.title}
                    </Button>
                  </li>
                )
              })}
            </Column>
          </Column>
        )
      })}
    </Box>
  );
};