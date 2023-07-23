import React from 'react';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from 'redux/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAsync(contact.id));
  };
  return (
    <li className={styles.DataForm}>
      <p className={styles.Results}>
        {contact.name}: {contact.phone}
      </p>
      <button
        className={styles.DeleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
