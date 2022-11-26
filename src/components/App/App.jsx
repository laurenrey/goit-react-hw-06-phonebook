import { Toaster } from 'react-hot-toast';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper, MainTitle, ContactsTitle } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Toaster position="top-center" reverseOrder={false} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
