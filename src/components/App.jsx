import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
//import { Filter } from './ContactForm/ContactForm';
//import { ContactList } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit is working!!!');
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
