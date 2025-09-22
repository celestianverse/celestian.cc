import React from "react";
import classNames from "classnames";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Props } from "./Section.types";
import styles from "./Section.module.scss";

export const Section = (
  {
    color,
    variant = "fill",
    paddingY = "m",
    paddingTop,
    paddingBottom,
    height = "auto",
    radius,
    radiusTop,
    radiusBottom,
    overlapBottom = "none",
    offsetHeader,
    className,
    classNameContainer,
    children,
    ...rest
  }: Props) => {
  return (
    <Flex
      as="section"
      className={classNames(
        styles.section,
        styles[`color-${color}`],
        styles[`variant-${variant}`],
        styles[`padding-y-${paddingY}`],
        styles[`padding-top-${paddingTop}`],
        styles[`padding-bottom-${paddingBottom}`],
        styles[`height-${height}`],
        styles[`overlap-bottom-${overlapBottom}`],
        styles[`radius-${radius}`],
        styles[`radius-top-${radiusTop}`],
        styles[`radius-bottom-${radiusBottom}`],
        className,
      )}
      {...rest}
    >
      <Flex
        direction={rest.direction}
        gap={rest.gap}
        align={rest.align}
        justify={rest.justify}
        wrap={rest.wrap}
        className={classNames(
          styles.container,
          {
            [styles["offset-header"]]: offsetHeader,
          },
          classNameContainer,
        )}
      >
        {children}
      </Flex>
    </Flex>
  );
};
