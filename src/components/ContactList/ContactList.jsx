import React, { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contactLIST } = this.props;
    return (
      <>
        <ul className={css.contactList}>
          {contactLIST.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
