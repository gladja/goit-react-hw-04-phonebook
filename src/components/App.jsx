import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import data from '../data/data.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title } from './ContactForm/ContactForm.styled';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || data);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContacts = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    if (name.value.trim() === '' || number.value.trim() === '') {
      return Notiflix.Notify.warning('Please write First name Last name and number');
    }
    const isDoubleName = contacts.find(el => el.name === name.value);
    if (isDoubleName) {
      return Notiflix.Notify.failure(`${name.value} is already in contacts`);
    }
    setContacts(([newContacts, ...contacts]));
    e.currentTarget.reset();
  };

  const contactsFilter = (e) => {
    setFilter(e.target.value);
  };

  const contactsFilterResult = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });
  // console.log(contactsFilterResult);

  const handleDelete = (id) => {
    const filteredItems = contacts.filter(el => el.id !== id);
    setContacts(filteredItems);
  };

  return (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm
          handleSubmit={handleSubmit}
        />
        <Title>Contacts</Title>
        <Filter
          contactsFilter={contactsFilter}
          filter={filter}
        />
        <ContactList
          contacts={contactsFilterResult}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

