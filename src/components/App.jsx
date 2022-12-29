import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddContact = event => {
    const { contacts } = this.state;
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
      this.setState({ contacts: [...this.state.contacts, ...[contact]] });
      form.reset();
    }

    /*this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));*/
  };

  filterChange = event => {
    this.setState({
      filter: event.target.value.toLowerCase().trim(),
    }); /*() => {
      console.log(this.state.filter);
    });*/
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  deleteContact = event => {
    const { id } = event.target.dataset;
    const indeks = this.state.contacts.findIndex(contact => contact.id === id);
    const newContacts = [...this.state.contacts]; // make a separate copy of the array
    if (indeks !== -1) {
      newContacts.splice(indeks, 1);
      this.setState({ contacts: newContacts });
    }
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <Section>
          <a href="https://github.com/Urszula-Molska/goit-react-hw-02-phonebook/">
            https://github.com/Urszula-Molska/goit-react-hw-02-phonebook/
          </a>
        </Section>
        <Section title="Phonebook">
          <ContactForm formSubmit={this.AddContact} />
        </Section>
        <Section title="Contacts">
          <Filter inputFilter={this.filterChange} />
          {filter.length === 0 ? (
            <ContactList
              removeContact={this.deleteContact}
              contactLIST={contacts}
            />
          ) : (
            <ContactList
              removeContact={this.deleteContact}
              contactLIST={this.filterContacts()}
            />
          )}
        </Section>
      </div>
    );
  }
}

/*
handleChange = evt => {
  const { name, value } = evt.target;
  this.setState({ [name]: value });
}*/
