import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', text => {
  return {
    payload: text,
  };
});

export const removeContact = createAction(
  'contacts/removeContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const filterContacts = createAction('filter/filterContacts', value => {
  return {
    payload: value,
  };
});
