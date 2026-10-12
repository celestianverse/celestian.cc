import { routes } from "@/configs/routes";

export const hero = {
  pretitle: "For your product",
  title: "Full-Stack Development",
  subtitle: "Go, Node.js, Python, TypeScript",
  image: "/images/hero/home--x2.png",
  projects: {
    path: routes.projects.path,
    label: "Featured projects",
  },
  contacts: {
    path: routes.contacts.path,
    label: "Work together",
  },
};