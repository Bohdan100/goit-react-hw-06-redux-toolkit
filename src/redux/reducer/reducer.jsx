import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContacts } from '../actions';
import { getFromLocalStorage } from 'functions/LocalStorage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState = getFromLocalStorage('contacts', defaultContacts);

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => {
    return action.payload;
  },
});
