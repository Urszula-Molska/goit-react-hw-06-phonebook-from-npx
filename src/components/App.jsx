//import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
//import { Filter } from './Filter/Filter';
//import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts instanceof Array) {
      setContacts({ contacts: parsedContacts });
    }
    return;
  }, []);

  const AddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name;
    const number = form.elements.number;

    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.value.toLowerCase().trim()
      )
    ) {
      return alert(`${name.value} is already in contacts`);
    } else {
      setContacts({ contacts: [...contacts, ...[contact]] });
      /*, () => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }*/
      localStorage.setItem('contacts', JSON.stringify(contacts));

      form.reset();
    }
  };

  const filterChange = event => {
    setFilter({
      filter: event.target.value.toLowerCase().trim(),
    });
  };

  const filterContacts = () => {
    //const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = event => {
    const { id } = event.target.dataset;
    const index = contacts.findIndex(contact => contact.id === id);
    const newContacts = [...contacts]; // make a separate copy of the array
    if (index !== -1) {
      newContacts.splice(index, 1);
      setContacts({ contacts: newContacts }, () => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      });
    }
  };

  return (
    <div>
      <Section>
        <a href="https://urszula-molska.github.io/goit-react-hw-04-phonebook/">
          https://urszula-molska.github.io/goit-react-hw-04-phonebook
        </a>
        <a href="https://github.com/Urszula-Molska/goit-react-hw-04-phonebook">
          https://github.com/Urszula-Molska/goit-react-hw-04-phonebook
        </a>
      </Section>
      <Section title="Phonebook">
        <ContactForm formSubmit={AddContact()} />
      </Section>
    </div>
  );
};
/*<Section title="Contacts">
        <Filter inputFilter={filterChange} />
        {filter.length === 0 ? (
          <ContactList removeContact={deleteContact} contactList={contacts} />
        ) : (
          <ContactList
            removeContact={deleteContact}
            contactList={filterContacts}
          />
        )}
      </Section>*/
