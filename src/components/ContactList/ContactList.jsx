import React, { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contactLIST, removeContact } = this.props;
    return (
      <>
        <ul className={css.contactList}>
          {contactLIST.map(({ id, name, number }) => (
            <li className={css.listItem} key={id} data-id={id}>
              <span className={css.contactInfo}>
                {name}: {number}
              </span>
              <button
                data-id={id}
                key={id}
                onClick={removeContact}
                className={css.deleteBtn}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
ContactList.propTypes = {
  contactLIST: PropTypes.array,
  removeContact: PropTypes.func,
};
