import { List, Item, Button } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQue = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(`'filterQue ' ${filterQue}`);

  const filteredContacts = contacts.filter(item =>
    item.name.name.includes(filterQue)
  );

  return (
    <List>
      {filteredContacts.map(item => (
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
