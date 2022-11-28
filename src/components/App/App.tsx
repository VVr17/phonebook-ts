import React from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { Section } from 'components/Section/Section';
import { toast, ToastContainer } from 'react-toastify';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { nanoid } from 'nanoid';
import { Text } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { IContact } from 'constants/interface';
import { Filter } from 'components/Filter/Filter';

// const LOCAL_STORAGE_KEY = {
//   contacts: 'contacts',
// };

const contacts: IContact[] = [
  { name: 'oleg', number: '123-123-123', id: '123' },
];

export const App: React.FC = () => {
  //  const [contacts, setContacts] = useState(
  //    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.contacts)) ?? []
  //  );
  //  const [filter, setFilter] = useState('');

  //  useEffect(() => {
  //    localStorage.setItem(LOCAL_STORAGE_KEY.contacts, JSON.stringify(contacts));
  //  }, [contacts]);

  function addContact({ name, number }: { name: string; number: string }) {
    const contact = {
      name,
      number,
      id: nanoid().slice(0, 8),
    };
    console.log('contact', contact);
    //  setContacts(prevContacts => [...prevContacts, contact]);
    //  toast.success(`${name.toUpperCase()} successfully added to CONTACTS`);
  }

  function deleteContact(idToDelete: string) {
    // const contactToDelete = contacts.find(({ id }) => id === idToDelete);
    //  setContacts(prevContacts =>
    //    prevContacts.filter(({ id }) => id !== idToDelete)
    //  );
    //  toast.info(`${contactToDelete.name.toUpperCase()} deleted from CONTACTS`);
  }

  function changeFilter(event: React.ChangeEvent<HTMLInputElement>) {
    // setFilter(event.target.value);
  }

  //  function getFilteredContacts() {
  //    const normalizedFilter = filter.toLowerCase();

  //    return contacts.filter(({ name }) =>
  //      name.toLowerCase().includes(normalizedFilter)
  //    );
  //  }

  return (
    <div>
      <AppBar />
      <Box as="main" bg="mainBackgroundColor">
        <Section title="Create new contact">
          <NewContactForm onFormSubmit={addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          {/* {contacts?.length > 0 && (
            <Filter value={filter} onChange={changeFilter} />
          )} */}
          {/* <ContactList
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          /> */}

          <Filter value={''} onChange={changeFilter} />

          {contacts.length > 0 ? (
            <ContactList contacts={contacts} onDeleteContact={deleteContact} />
          ) : (
            <Text>There are no contacts</Text>
          )}
        </Section>
        <ToastContainer autoClose={3000} theme="colored" />
      </Box>
    </div>
  );
};
