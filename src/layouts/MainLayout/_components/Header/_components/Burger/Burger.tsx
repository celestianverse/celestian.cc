"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { Button } from "@/components/uikit/Button/Button";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { useIsActivePath } from "@/hooks/useActivePage";
import { uikitNavigation } from "@/configs/uikitNavigation";
import { routes } from "@/configs/routes";
import { burger } from "@/data/burger";
import styles from "./Burger.module.scss";

export const Burger = () => {
  const isActivePath = useIsActivePath();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("modal-mode");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-mode");
  };

  return (
    <div className={isOpen ? styles.open : ""}>
      <Button
        variant="ghost"
        size="m"
        iconOnly="burger"
        aria-label="Open navigation"
        onClick={handleOpen}
      />
      <button
        aria-label="Close navigation"
        className={styles.overlay}
        onClick={handleClose}
      />
      <Box
        color="contrast"
        paddingY={48}
        paddingX={32}
        radius={0}
        className={classNames(styles.drawer, "scroll")}
      >
        <nav>
          <Column
            gap={32}
          >
            <Column gap={16}>
              <Title
                as="h5"
                size="s"
              >
                {burger.title}
              </Title>
              <Column gap={0}>
                {Object.values(routes).map((page) => (
                  <Anchor
                    key={page.path}
                    as={Link}
                    href={page.path}
                    paddingY={16}
                    variant={isActivePath(page.path) ? "outline" : "base"}
                    borderWidth={isActivePath(page.path) ? 2 : 0}
                    borderStyle={isActivePath(page.path) ? "dashed" : "none"}
                    onClick={handleClose}
                  >
                    {page.name}
                  </Anchor>
                ))}
              </Column>
            </Column>
            {isActivePath(routes.uikit.path) && (
              <Column gap={16}>
                <Title
                  as="h5"
                  size="s"
                >
                  {burger.subtitle}
                </Title>
                <Column gap={0}>
                  {Object.values(uikitNavigation).map((section) => {
                    return (
                      <Column
                        key={section.name}
                        gap={0}
                      >
                        {Object.values(section.pages).map((page) => {
                          return (
                            <Anchor
                              key={page.path}
                              as={Link}
                              href={page.path}
                              paddingY={16}
                              variant={isActivePath(page.path) ? "outline" : "base"}
                              borderWidth={isActivePath(page.path) ? 2 : 0}
                              borderStyle={isActivePath(page.path) ? "dashed" : "none"}
                              onClick={handleClose}
                            >
                              {page.name}
                            </Anchor>
                          )
                        })}
                      </Column>
                    )
                  })}
                </Column>
              </Column>
            )}
          </Column>
        </nav>
      </Box>
    </div>
  );
};
