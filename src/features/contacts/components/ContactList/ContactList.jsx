import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteContact } from "../../contactsSlice.js";
import { getContacts } from "../../contactsSlice.js";
import { getFilter } from "../../../filter/filterSlice.js";

import css from "./ContactList.module.css";
import PropTypes from "prop-types";

const getVisibleContacts = (filter, contacts) => {
  if (filter.length === 0) {
    return contacts;
  } else {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map((contact) => (
          <li className={css.listItem} key={contact.id} data-id={contact.id}>
            <span className={css.contactInfo}>
              {contact.name}: {contact.number}
            </span>
            <button
              data-id={contact.id}
              key={contact.id}
              className={css.deleteBtn}
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
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
