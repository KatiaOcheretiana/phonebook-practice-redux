import { List, Item, Button } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, storageKey } from 'redux/contactSlice';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterQue.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(item => (
        <Item key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
