import React from "react";
import classNames from "classnames";
import { Props, Element } from "./_types/types";
import { Polymorphic } from "@/types/Polymorphic";
import styles from "./Container.module.scss";

const DEFAULT_ELEMENT = "div";

export const Container = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.container,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
