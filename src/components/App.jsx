
import { Filter } from './Phonebook/Filter/Filter'
import { ContactsList } from "./Phonebook/ContactList/ContactsList";
import { ContactForm } from "./Phonebook/ContactForm/ContactForm";
import { nanoid } from "nanoid"
import { useEffect, useState } from 'react';


const LS_KEY = 'savedContact'

export const App = () => {

  const [contacts, setContact] = useState(
    (JSON.parse(window.localStorage.getItem(LS_KEY)) !== null &&
      JSON.parse(window.localStorage.getItem(LS_KEY)).length !== 0 &&
      JSON.parse(window.localStorage.getItem(LS_KEY))) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContact = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };

    // const newContact = { ...contact, id: nanoid() };
    // console.log(newContact)
    const normalizedName = newContact.name.toLowerCase();

    if (checkedName(normalizedName)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContact(state => [...state, newContact]);
    e.target.name.value = '';
    e.target.number.value = '';
  };
  
  const checkedName = name =>
    contacts.find(contact => contact.name.toLowerCase() === name);


  const changeFilter = e => {
    setFilter(e.target.value);
  }

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (id) => {
    return setContact(state => state.filter(contact => contact.id !== id));
  }
  // const { filter } = this.state;
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 30,
        
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactsList contacts={filteredContacts()} onDeleteContact={deleteContact} />
    </div>
  );
};

