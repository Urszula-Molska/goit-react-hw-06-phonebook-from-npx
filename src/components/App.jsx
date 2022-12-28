import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
//import { Filter } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import css from '../index.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name;
    const number = form.elements.number;

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    form.reset();
  };

  render() {
    const { contacts, name } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm formSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <ContactList contactLIST={contacts} />
      </div>
    );
  }
}

/*state = {
  contacts: [{ id: '1d', namE: '', number: '' }],
  name: '',
};*/
