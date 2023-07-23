import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { fetchContactsAsync } from 'redux/actions';
import { selectFilter, selectContacts } from 'redux/contactsSlice';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  if (!contacts) {
    return <div>Loading...</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.ManageResults}>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default ContactList;
