import type { Metadata } from "next";
import { Page } from "@/components/uikit/Page/Page";
import { IntroSection } from "@/components/custom/IntroSection/IntroSection";
import { ContactsSection } from "./_components/ContactsSection/ContactsSection";
import { MeSection } from "./_components/MeSection/MeSection";
import { contacts } from "@/data/contacts";
import { seo } from "@/configs/seo";

export const metadata: Metadata = {
  title: seo.contacts.title,
};

const ContactsPage = () => {
  return (
    <Page>
      <IntroSection title={contacts.title}/>
      <MeSection />
      <ContactsSection />
    </Page>
  );
};

export default ContactsPage;