import type { Metadata } from "next";
import { Page } from "@/components/uikit/Page/Page";
import { IntroSection } from "@/components/custom/IntroSection/IntroSection";
import { ProjectsSection } from "./_components/ProjectsSection/ProjectsSection";
import { projects } from "@/data/projects";
import { app } from "@/data/app";

export const metadata: Metadata = {
  title: `${projects.title} — ${app.name}`,
};

const ProjectsPage = () => {
  return (
    <Page>
      <IntroSection title={projects.title}/>
      <ProjectsSection />
    </Page>
  );
};

export default ProjectsPage;