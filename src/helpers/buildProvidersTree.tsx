import type { ComponentType, FC, PropsWithChildren, ReactNode } from "react";

type Provider<P = object> = ComponentType<PropsWithChildren<P>>;
type Entry<P = object> = readonly [Provider<P>, P] | readonly [Provider<P>];

export function buildProvidersTree<const T extends readonly Entry<any>[]>(entries: T) {
  const Providers: FC<PropsWithChildren> = ({ children }) =>
    entries.reduceRight<ReactNode>((acc, entry) => {
      const [Provider, props] = entry as Entry<any>;
      return <Provider {...(props as object)}>{acc}</Provider>;
    }, children);

  return Providers;
}
