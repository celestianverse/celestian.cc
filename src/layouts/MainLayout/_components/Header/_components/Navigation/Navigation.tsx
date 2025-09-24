"use client";
import Link from "next/link";
import { Row } from "@/components/uikit/Row/Row";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { ROUTES } from "@/constants/routes";
import { useIsActivePath } from "@/hooks/useActivePage";

export const Navigation = () => {
  const isActivePath = useIsActivePath();

  return (
    <nav>
      <Row
        as="ul"
        gap={0}
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
            >
              {page.title}
            </Anchor>
          </li>
        ))}
      </Row>
    </nav>
  );
};
