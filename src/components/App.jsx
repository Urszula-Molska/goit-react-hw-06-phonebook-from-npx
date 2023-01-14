import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts instanceof Array) {
      this.setState({ contacts: parsedContacts });
    }
    return;
  }

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
      this.setState(
        { contacts: [...this.state.contacts, ...[contact]] },
        () => {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      );
      form.reset();
    }
  };

  filterChange = event => {
    this.setState({
      filter: event.target.value.toLowerCase().trim(),
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  deleteContact = event => {
    const { id } = event.target.dataset;
    const index = this.state.contacts.findIndex(contact => contact.id === id);
    const newContacts = [...this.state.contacts]; // make a separate copy of the array
    if (index !== -1) {
      newContacts.splice(index, 1);
      this.setState({ contacts: newContacts }, () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      });
    }
  };

  render() {
    const { contacts, filter } = this.state;

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
          <ContactForm formSubmit={this.AddContact} />
        </Section>
        <Section title="Contacts">
          <Filter inputFilter={this.filterChange} />
          {filter.length === 0 ? (
            <ContactList
              removeContact={this.deleteContact}
              contactList={contacts}
            />
          ) : (
            <ContactList
              removeContact={this.deleteContact}
              contactList={this.filterContacts()}
            />
          )}
        </Section>
      </div>
    );
  }
}
