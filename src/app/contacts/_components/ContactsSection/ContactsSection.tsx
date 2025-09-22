import { Section } from "@/components/uikit/Section/Section";
import { Grid } from "@/components/uikit/Grid/Grid";
import { Contact } from "./_components/Contact/Contact";
import { contacts } from "@/data/contacts";
import styles from "./ContactsSection.module.scss";

export const ContactsSection = () => {
  const contactsItems = [
    contacts.location,
    contacts.telegram,
    contacts.email,
    contacts.start,
    contacts.linkedin,
    contacts.github
  ];

  return (
    <Section
      variant="gradient"
      color="neutral"
      gap="xl"
      radiusTop="m"
      overlapBottom="m"
    >
      <Grid>
        {contactsItems.map((item) => (
          <Contact
            key={item.title}
            data={item}
            className={styles.contact}
          />
        ))}
      </Grid>
    </Section>
  );
};
