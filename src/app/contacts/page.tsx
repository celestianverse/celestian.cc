import type { Metadata } from "next";
import { Page } from "@/components/uikit/Page/Page";
import { IntroSection } from "@/components/custom/IntroSection/IntroSection";
import { ContactsSection } from "./_components/ContactsSection/ContactsSection";
import { MeSection } from "./_components/MeSection/MeSection";
import { contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: `${contacts.title} — Celestian`,
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