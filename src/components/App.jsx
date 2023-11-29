import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { storageKey } from 'redux/contactSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
};
