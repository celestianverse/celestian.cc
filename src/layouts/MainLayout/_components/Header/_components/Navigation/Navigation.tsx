"use client";
import Link from "next/link";
import { Row } from "@/components/uikit/Row/Row";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { useIsActivePath } from "@/hooks/useActivePage";
import { navigation } from "@/configs/navigation";

export const Navigation = () => {
  const isActivePath = useIsActivePath();

  return (
    <nav>
      <Row
        as="ul"
        gap={0}
      >
        {Object.values(navigation).map((page) => (
          <li key={page.path}>
            <Anchor
              as={page.target === "_blank" ? "a" : Link}
              href={page.path}
              target={page.target}
              paddingY={16}
              paddingX={16}
              variant={isActivePath(page.path) ? "outline" : "base"}
              color="contrast"
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
