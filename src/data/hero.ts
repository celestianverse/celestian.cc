import { routes } from "@/configs/routes";

export const hero = {
  title: "Full-Stack Development",
  subtitle: "For your project",
  image: "/images/hero/compressed/home-3--x2.png",
  projects: {
    path: routes.projects.path,
    label: "Latest projects",
  },
  contacts: {
    path: routes.contacts.path,
    label: "Work together",
  },
};