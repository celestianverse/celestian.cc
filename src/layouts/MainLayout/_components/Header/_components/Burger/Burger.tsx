"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/uikit/Button/Button";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { ROUTES } from "@/constants/routes";
import styles from "./Burger.module.scss";

export const Burger = () => {
  const pathname = usePathname();

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
        padding="s"
        radius="none"
        className={styles.drawer}
      >
        <nav>
          <Column
            as="ul"
            gap="xs"
          >
            {Object.values(ROUTES.main).map((page) => (
              <li key={page.path}>
                <Anchor
                  as={Link}
                  href={page.path}
                  padding="l"
                  dash={page.path === "/" ? pathname === "/" : pathname.startsWith(page.path)}
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
