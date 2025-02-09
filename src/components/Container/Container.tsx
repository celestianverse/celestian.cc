import React from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

type Element = "div" | "section" | "article" | "header" | "footer";

type Props = {
  as?: Element;
  className?: string;
  children: React.ReactNode;
};

export const Container = ({
  as: Element = "div",
  className,
  children,
}: Props) => {
  return (
    <Element
      className={classNames(
        styles.container,
        className,
      )}
    >
      {children}
    </Element>
  );
};
