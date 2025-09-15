"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "@/components/uikit/Section/Section";
import { Row } from "@/components/uikit/Row/Row";
import { Logo } from "@/components/uikit/Logo/Logo";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { ROUTES } from "@/constants/routes";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Section
      as="header"
      paddingY="none"
      direction="row"
      align="center"
      justify="space-between"
      className={styles.header}
    >
      <Logo></Logo>
      <nav>
        <Row
          as="ul"
          gap="none"
        >
          {Object.values(ROUTES.main).map((page) => (
            <li key={page.path}>
              <Anchor
                as={Link}
                href={page.path}
                padding="l"
                dash={page.path === "/" ? pathname === "/" : pathname.startsWith(page.path)}
              >
                {page.title}
              </Anchor>
            </li>
          ))}
        </Row>
      </nav>
    </Section>
  );
};
