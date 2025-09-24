import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./Flex.types";

const DEFAULT_ELEMENT = "div";

export const Flex = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>
({
   as,
   overflow,
   direction,
   laptopDirection,
   tabletDirection,
   mobileDirection,
   align,
   laptopAlign,
   tabletAlign,
   mobileAlign,
   justify,
   laptopJustify,
   tabletJustify,
   mobileJustify,
   wrap,
   gap = 32,
   laptopGap,
   tabletGap,
   mobileGap,
   fullwidth,
   children,
   className,
   ...rest
 }: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        "display-flex",
        {
          [`overflow-${overflow}`]: overflow,
          [`flex-direction-${direction}`]: direction,
          [`laptop-flex-direction-${laptopDirection}`]: laptopDirection,
          [`tablet-flex-direction-${tabletDirection}`]: tabletDirection,
          [`mobile-flex-direction-${mobileDirection}`]: mobileDirection,
          [`align-items-${align}`]: align,
          [`laptop-align-items-${laptopAlign}`]: laptopAlign,
          [`tablet-align-items-${tabletAlign}`]: tabletAlign,
          [`mobile-align-items-${mobileAlign}`]: mobileAlign,
          [`justify-content-${justify}`]: justify,
          [`laptop-justify-content-${laptopJustify}`]: laptopJustify,
          [`tablet-justify-content-${tabletJustify}`]: tabletJustify,
          [`mobile-justify-content-${mobileJustify}`]: mobileJustify,
          [`flex-wrap-${wrap}`]: wrap,
          [`gap-${gap}`]: gap != null,
          [`laptop-gap-${laptopGap}`]: laptopGap != null,
          [`tablet-gap-${tabletGap}`]: tabletGap != null,
          [`mobile-gap-${mobileGap}`]: mobileGap != null,
          ["fullwidth"]: fullwidth,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
