import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { List, Button, ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};
