import React from "react";
import { Icon } from "@/components/uikit/Icon/Icon";
import type { Keys } from "@/components/uikit/Icon/Icon.types";

type Styles = {
  icon?: string;
  content?: string;
};

export type IconProps = {
  iconStart?: Keys;
  iconEnd?: Keys | null;
  iconOnly?: Keys;
};

type Props = IconProps & {
  styles?: Styles;
  children?: React.ReactNode;
};

export const useIcon = ({
  iconStart,
  iconEnd,
  iconOnly,
  children,
  styles = {},
}: Props) => {
  if (iconOnly) {
    return (
      <Icon
        name={iconOnly}
        className={styles.icon}
      />
    );
  }

  return (
    <>
      {iconStart && (
        <Icon
          name={iconStart}
          className={styles.icon}
        />
      )}
      <span className={styles.content}>
        {children}
      </span>
      {iconEnd && (
        <Icon
          name={iconEnd}
          className={styles.icon}
        />
      )}
    </>
  );
};
