import { routes } from "@/configs/routes";

export const navigation = {
  home: {
    title: routes.home.name,
    path: routes.home.path,
    target: "",
  },
  projects: {
    title: routes.projects.name,
    path: routes.projects.path,
    target: "",
  },
  uikit: {
    title: routes.uikit.name,
    path: routes.uikit.path,
    target: "",
  },
  game: {
    title: routes.game.name,
    path: routes.game.path,
    target: "_blank",
  },
  contacts: {
    title: routes.contacts.name,
    path: routes.contacts.path,
    target: "",
  },
};
