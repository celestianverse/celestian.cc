import React from "react";
import classNames from "classnames";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Props } from "./Section.types";
import styles from "./Section.module.scss";

export const Section = (
  {
    variant = "flat",
    color,
    tone = "base",
    direction = "column",
    laptopDirection,
    tabletDirection,
    mobileDirection,
    gap = 64,
    laptopGap,
    tabletGap,
    mobileGap,
    paddingY = 96,
    laptopPaddingY,
    tabletPaddingY,
    mobilePaddingY,
    paddingTop,
    laptopPaddingTop,
    tabletPaddingTop,
    mobilePaddingTop,
    paddingBottom,
    laptopPaddingBottom,
    tabletPaddingBottom,
    mobilePaddingBottom,
    height = "auto",
    radius,
    laptopRadius,
    tabletRadius,
    mobileRadius,
    radiusTop,
    laptopRadiusTop,
    tabletRadiusTop,
    mobileRadiusTop,
    radiusBottom,
    laptopRadiusBottom,
    tabletRadiusBottom,
    mobileRadiusBottom,
    overlapBottom = 0,
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
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`height-${height}`],
        styles[`overlap-bottom-${overlapBottom}`],
        {
          [`padding-y-${paddingY}`]: paddingY != null,
          [`laptop-padding-y-${laptopPaddingY}`]: laptopPaddingY != null,
          [`tablet-padding-y-${tabletPaddingY}`]: tabletPaddingY != null,
          [`mobile-padding-y-${mobilePaddingY}`]: mobilePaddingY != null,
          [`padding-top-${paddingTop}`]: paddingTop != null,
          [`laptop-padding-top-${laptopPaddingTop}`]: laptopPaddingTop != null,
          [`tablet-padding-top-${tabletPaddingTop}`]: tabletPaddingTop != null,
          [`mobile-padding-top-${mobilePaddingTop}`]: mobilePaddingTop != null,
          [`padding-bottom-${paddingBottom}`]: paddingBottom != null,
          [`laptop-padding-bottom-${laptopPaddingBottom}`]: laptopPaddingBottom != null,
          [`tablet-padding-bottom-${tabletPaddingBottom}`]: tabletPaddingBottom != null,
          [`mobile-padding-bottom-${mobilePaddingBottom}`]: mobilePaddingBottom != null,
          [`border-radius-${radius}`]: radius != null,
          [`laptop-border-radius-${laptopRadius}`]: laptopRadius != null,
          [`tablet-border-radius-${tabletRadius}`]: tabletRadius != null,
          [`mobile-border-radius-${mobileRadius}`]: mobileRadius != null,
          [`border-radius-top-${radiusTop}`]: radiusTop != null,
          [`laptop-border-radius-top-${laptopRadiusTop}`]: laptopRadiusTop != null,
          [`tablet-border-radius-top-${tabletRadiusTop}`]: tabletRadiusTop != null,
          [`mobile-border-radius-top-${mobileRadiusTop}`]: mobileRadiusTop != null,
          [`border-radius-bottom-${radiusBottom}`]: radiusBottom != null,
          [`laptop-border-radius-bottom-${laptopRadiusBottom}`]: laptopRadiusBottom != null,
          [`tablet-border-radius-bottom-${tabletRadiusBottom}`]: tabletRadiusBottom != null,
          [`mobile-border-radius-bottom-${mobileRadiusBottom}`]: mobileRadiusBottom != null,
        },
        className,
      )}
      {...rest}
    >
      <Flex
        direction={direction}
        laptopDirection={laptopDirection}
        tabletDirection={tabletDirection}
        mobileDirection={mobileDirection}
        gap={gap}
        laptopGap={laptopGap}
        tabletGap={tabletGap}
        mobileGap={mobileGap}
        align={rest.align}
        justify={rest.justify}
        wrap={rest.wrap}
        className={classNames(
          styles.container,
          "display-flex",
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
