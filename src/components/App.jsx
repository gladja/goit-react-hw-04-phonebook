import { Component } from 'react';
import { nanoid } from 'nanoid';
import  Notiflix  from 'notiflix';
import contacts from '../data/data.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title } from './ContactForm/ContactForm.styled';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
    this.setState({ contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (e) => {
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

    const isDoubleName = this.state.contacts.find(el => el.name === name.value);
    if (isDoubleName) {
      return Notiflix.Notify.failure(`${name.value} is already in contacts`);
    }

    this.setState((prev) => ({
      contacts: [newContacts, ...prev.contacts],
    }));
    e.currentTarget.reset();
  };

  contactsFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  contactsFilterResult = () => {
    return this.state.contacts.filter(el => el.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    // console.log(this.state.filter.length);
    const contactsFilterResult = this.contactsFilterResult();
    // console.log(result);

    return (
      <>
        <div>
          <Title>Phonebook</Title>
          <ContactForm
            handleSubmit={this.handleSubmit}
          />
          <Title>Contacts</Title>
          <Filter
            contactsFilter={this.contactsFilter}
            filter={this.state.filter}
          />
          <ContactList
            contacts={contactsFilterResult}
            handleDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}
