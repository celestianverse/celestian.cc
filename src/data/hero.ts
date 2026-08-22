import { routes } from "@/configs/routes";

export const hero = {
  pretitle: "For your project",
  title: "Full-Stack Development",
  subtitle: "Go, PostgreSQL, Redis, React, TypeScript, Docker",
  image: "/images/hero/home--x2.png",
  projects: {
    path: routes.projects.path,
    label: "Latest projects",
  },
  contacts: {
    path: routes.contacts.path,
    label: "Work together",
  },
};