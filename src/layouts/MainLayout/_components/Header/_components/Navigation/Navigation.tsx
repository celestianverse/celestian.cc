"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Row } from "@/components/uikit/Row/Row";
import { Anchor } from "@/components/uikit/Anchor/Anchor";
import { ROUTES } from "@/constants/routes";

export const Navigation = () => {
  const pathname = usePathname();

  return (
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
  );
};
