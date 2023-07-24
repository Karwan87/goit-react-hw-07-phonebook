import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContactAsync } from 'redux/actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || phone.trim() === '') {
      alert('Cannot add an empty result!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      phone: phone.trim(),
    };

    dispatch(addContactAsync(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.InputsForm} onSubmit={handleSubmit}>
      <input
        className={styles.TypeText}
        type="text"
        placeholder="Name"
        value={name}
        pattern="^[A-Za-z.'\- ]+$"
        onChange={e => setName(e.target.value)}
      />
      <input
        className={styles.TypeText}
        type="tel"
        placeholder="Phone number"
        value={phone}
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
        onChange={e => setPhone(e.target.value)}
      />
      <div className={styles.ButtonContainer}>
        <button className={styles.SubmitButton} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
