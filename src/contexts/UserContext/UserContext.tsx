"use client";
import React, { createContext, useContext, useRef } from "react";
import { createStore, useStore } from "zustand";
import type { Nullable } from "@/types/Nullable";
import type { Font } from "@/types/Font";
import type { Theme } from "@/types/Theme";

type UpdateFontHandler = (font: Font) => void;

type UpdateThemeHandler = (theme: Theme) => void;

type Props = {
  font: Font;
  theme: Theme;
};

type State =
  Props & {
    setFont: UpdateFontHandler;
    setTheme: UpdateThemeHandler;
  };

type ProviderProps =
  Props & {
    children: React.ReactNode;
  };

type UserStore = ReturnType<typeof createUserStore>;

export const createUserStore = ({ font, theme }: Props) => {
  return createStore<State>()((set) => ({
    font,
    theme,
    setTheme: (theme) => {
      set({ theme });
    },
    setFont: (font) => {
      set({ font });
    },
  }));
};

export const UserContext = createContext<Nullable<UserStore>>(null);

export const useUserContext = <
  T,
>(selector: (state: State) => T): T => {
  const store = useContext(UserContext);
  if (!store) throw new Error("Context must be used within Provider!");
  return useStore(store, selector);
};

export const UserProvider = ({
  font,
  theme,
  children,
}: ProviderProps) => {
  const store = useRef<Nullable<UserStore>>(null);

  if (!store.current) {
    store.current = createUserStore({ font, theme });
  }

  return (
    <UserContext.Provider value={store.current}>
      {children}
    </UserContext.Provider>
  );
};
