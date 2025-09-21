import React from "react";

type Provider<P = object> = React.ComponentType<React.PropsWithChildren<P>>;
type Entry<P = object> = readonly [Provider<P>, P] | readonly [Provider<P>];

export function buildProvidersTree<const T extends readonly Entry<any>[]>(entries: T) {
  const Providers: React.FC<React.PropsWithChildren> = ({ children }) =>
    entries.reduceRight<React.ReactNode>((acc, entry) => {
      const [Provider, props] = entry as Entry<any>;
      return <Provider {...(props as object)}>{acc}</Provider>;
    }, children);

  return Providers;
}
