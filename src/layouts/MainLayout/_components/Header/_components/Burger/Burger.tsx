"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { ROUTES } from "@/constants/routes";
import styles from "./Burger.module.scss";
import { useIsActivePath } from "@/hooks/useActivePage";

export const Burger = () => {
  const isActivePath = useIsActivePath();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? styles.open : ""}>
      <Button
        variant="ghost"
        size="m"
        iconOnly="burger"
        aria-label="Open navigation"
        onClick={() => setIsOpen(true)}
      />
      <button
        aria-label="Close navigation"
        className={styles.overlay}
        onClick={() => setIsOpen(false)}
      />
      <Box
        color="contrast"
        padding={24}
        radius={0}
        className={styles.drawer}
      >
        <nav>
          <Column
            as="ul"
            gap={16}
          >
            {Object.values(ROUTES.main).map((page) => (
              <li key={page.path}>
                <Anchor
                  as={Link}
                  href={page.path}
                  padding="l"
                  variant={isActivePath(page.path) ? "outline" : "base"}
                  borderWidth={isActivePath(page.path) ? 2 : 0}
                  borderStyle={isActivePath(page.path) ? "dashed" : "none"}
                  onClick={() => setIsOpen(false)}
                >
                  {page.title}
                </Anchor>
              </li>
            ))}
          </Column>
        </nav>
      </Box>
    </div>
  );
};
