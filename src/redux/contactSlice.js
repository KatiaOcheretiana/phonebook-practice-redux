import { nanoid } from 'nanoid';

export const storageKey = 'contacts';
const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

const initialState = {
  contacts: getInitialContacts(),
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addNewContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: { id: nanoid(), name, number },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: contactId,
  };
};
