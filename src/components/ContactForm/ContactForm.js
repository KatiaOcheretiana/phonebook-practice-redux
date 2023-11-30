import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/contactSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Invalid number format (e.g., xxx-xx-xx)'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const isNameRepeat = contacts.some(contact => {
      const contactName = contact?.name?.name;
      const newContactName = newContact.name;

      return (
        contactName &&
        newContactName &&
        contactName.toLowerCase() === newContactName.toLowerCase()
      );
    });

    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addNewContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
