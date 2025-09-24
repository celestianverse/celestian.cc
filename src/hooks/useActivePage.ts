"use client";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

const normalizePath = (path: string) => {
  if (!path) return "/";

  if (path === "/") return "/";

  if (path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
};

export const useIsActivePath = () => {
  const current = normalizePath(usePathname());

  return useCallback((href: string) => {
    const target = normalizePath(href);

    if (current === target) return true;

    if (target === "/") return false;

    return current.startsWith(`${target}/`);
  }, [current]);
};
