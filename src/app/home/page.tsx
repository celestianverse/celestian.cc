import { Page } from "@/components/uikit/Page/Page";
import { HeroSection } from "./_components/HeroSection/HeroSection";
import { StackSection } from "./_components/StackSection/StackSection";
import { MethodologySection } from "./_components/MethodologySection/MethodologySection";
import { ProjectsSection } from "./_components/ProjectsSection/ProjectsSection";

const HomePage = () => {
  return (
    <Page>
      <HeroSection />
      <StackSection />
      <MethodologySection />
      <ProjectsSection />
    </Page>
  );
};

export default HomePage;