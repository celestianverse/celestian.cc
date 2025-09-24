import classNames from "classnames";
import type { Props } from "./Page.types";
import styles from "./Page.module.scss";

export const Page = (
  {
    align,
    laptopAlign,
    tabletAlign,
    mobileAlign,
    justify,
    laptopJustify,
    tabletJustify,
    mobileJustify,
    gap,
    laptopGap,
    tabletGap,
    mobileGap,
    children,
    className,
    ...rest
  }: Props) => {
  return (
    <div
      className={classNames(
        styles.page,
        {
          [`align-items-${align}`]: align,
          [`laptop-align-items-${laptopAlign}`]: laptopAlign,
          [`tablet-align-items-${tabletAlign}`]: tabletAlign,
          [`mobile-align-items-${mobileAlign}`]: mobileAlign,
          [`justify-content-${justify}`]: justify,
          [`laptop-justify-content-${laptopJustify}`]: laptopJustify,
          [`tablet-justify-content-${tabletJustify}`]: tabletJustify,
          [`mobile-justify-content-${mobileJustify}`]: mobileJustify,
          [`gap-${gap}`]: gap != null,
          [`laptop-gap-${laptopGap}`]: laptopGap != null,
          [`tablet-gap-${tabletGap}`]: tabletGap != null,
          [`mobile-gap-${mobileGap}`]: mobileGap != null,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
