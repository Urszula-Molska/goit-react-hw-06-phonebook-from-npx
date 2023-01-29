import { createSlice, nanoid } from "@reduxjs/toolkit";

/*const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];*/

const getContactsFromLocalhost = () => {
  const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  if (parsedContacts instanceof Array) {
    const initialState = parsedContacts;
    console.log(initialState.length);
    return initialState;
  }
  return;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: getContactsFromLocalhost,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem("contacts", JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(state));
    },
  },
});

export const getContacts = (state) => state.contacts;

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
