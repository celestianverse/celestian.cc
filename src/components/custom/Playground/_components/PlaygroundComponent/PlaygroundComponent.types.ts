import type { Dispatch, ReactNode, SetStateAction } from "react";

export type Props<T> = {
  name: string;
  title?: string;
  component: ReactNode;
  componentLight?: ReactNode;
  componentDark?: ReactNode;
  props: T;
  setProps: Dispatch<SetStateAction<T>>;
  settings: object;
  defaultChosenProps: T;
};
