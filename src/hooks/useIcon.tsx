import type { ReactNode } from "react";
import { Icon } from "@/components/uikit/Icon/Icon";
import type { IconKeys } from "@/components/uikit/Icon/Icon.types";

type Styles = {
  icon?: string;
  label?: string;
};

export type IconProps = {
  iconStart?: IconKeys;
  iconEnd?: IconKeys;
  iconOnly?: IconKeys;
};

type Props = IconProps & {
  styles?: Styles;
  children?: ReactNode;
};

export const useIcon = ({
  iconStart,
  iconEnd,
  iconOnly,
  children,
  styles = {},
}: Props) => {
  if (iconOnly && (iconOnly !== "none")) {
    return (
      <Icon
        name={iconOnly}
        className={styles.icon}
      />
    );
  }

  return (
    <>
      {iconStart && (iconStart !== "none") && (
        <Icon
          name={iconStart}
          className={styles.icon}
        />
      )}
      <span className={styles.label}>
        {children}
      </span>
      {iconEnd && (iconEnd !== "none") && (
        <Icon
          name={iconEnd}
          className={styles.icon}
        />
      )}
    </>
  );
};
