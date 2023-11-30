import { List, Item, Button } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(item => {
    const name = item?.name?.name;
    return name && name.toLowerCase().includes(filterQue.toLowerCase());
  });

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(item => (
          <Item key={item.id}>
            <p>
              {item.name.name}: {item.name.number}
            </p>
            <Button onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
};
