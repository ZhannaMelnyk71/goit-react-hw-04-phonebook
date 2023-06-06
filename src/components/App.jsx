import { Component } from "react";
import { Filter } from './Phonebook/Filter/Filter'
import { ContactsList } from "./Phonebook/ContactList/ContactsList";
import { ContactForm } from "./Phonebook/ContactForm/ContactForm";
import { nanoid } from "nanoid"


const LS_KEY = 'savedContact'

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {

    const newContact = { ...contact, id: nanoid() };
    console.log(newContact)
    const normalizedName = newContact.name.toLowerCase();

    if (this.checkedName(normalizedName)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        }));
  };
  
  checkedName = name =>
    this.state.contacts.find(contact => contact.name.toLowerCase() === name);


  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    })
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {
    const { filter } = this.state;

    const normalisedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
      
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
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter}/>
          <ContactsList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
    </div>
  );
  }

};
