import Link from "next/link";
import classNames from "classnames";
import { Title } from "@/components/uikit/Title/Title";
import type { Props } from "./Logo.types";
import { routes } from "@/configs/routes";
import styles from "./Logo.module.scss";

export const Logo = ({ color = "primary", className }: Props) => {
  return (
    <Link
      href={routes.home.path}
      className={classNames(
        styles.logo,
        className,
      )}
    >
      <Title
        color={color}
        className={styles.title}
      >
        CELESTIAN
      </Title>
    </Link>
  );
};
