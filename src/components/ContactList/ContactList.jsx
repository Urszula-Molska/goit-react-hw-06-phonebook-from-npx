//import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contactList, removeContact }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contactList.map(({ id, name, number }) => (
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
};

ContactList.propTypes = {
  contactList: PropTypes.array,
  removeContact: PropTypes.func,
};
