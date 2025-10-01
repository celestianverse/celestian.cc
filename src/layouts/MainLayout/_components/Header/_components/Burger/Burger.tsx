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
        padding={24}
        radius={0}
        className={classNames(styles.drawer, "scroll")}
      >
        <nav>
          <Column
            gap={16}
          >
            <Title
              as="h5"
              size="s"
            >
              Navigation
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
                  {page.title}
                </Anchor>
              ))}
            </Column>
            {isActivePath(routes.uikit.path) && (
              <>
                <Title
                  as="h5"
                  size="s"
                >
                  UI kit
                </Title>
                <Column gap={0}>
                  {Object.values(uikitNavigation).map((section) => {
                    return (
                      <Column
                        key={section.title}
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
                              {page.title}
                            </Anchor>
                          )
                        })}
                      </Column>
                    )
                  })}
                </Column>
              </>
            )}
          </Column>
        </nav>
      </Box>
    </div>
  );
};
