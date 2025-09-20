import { Page } from "@/components/uikit/Page/Page";
import { HeroSection } from "@/app/home/_components/HeroSection/HeroSection";
import { StackSection } from "@/app/home/_components/StackSection/StackSection";
import { MethodologySection } from "@/app/home/_components/MethodologySection/MethodologySection";
import { ProjectsSection } from "@/app/home/_components/ProjectsSection/ProjectsSection";

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