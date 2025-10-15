import type { Color } from "@/types/Color";
import { LOADER_SIZE } from "@/components/uikit/Loader/Loader.constants";

export type LoaderSize = typeof LOADER_SIZE[number];

export type LoaderProps = {
  color?: Color;
  size?: LoaderSize;
  className?: string;
};