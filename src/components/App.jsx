import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import wrapper from './App.css';

export class App extends Component {
  state = {
    contacts: [],

    // [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  componentDidMount() {
    // console.log('didMount worked');

    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    console.log(savedContacts);
    console.log(this.state.contacts);

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate() {
    // console.log('didUpdate worked');

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  isSameContact = (name, number) => {
    return (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      ) ||
      this.state.contacts.find(
        contact => contact.number.trim() === number.trim()
      )
    );
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const updatedContacts = [...this.state.contacts, newContact];

    this.isSameContact(name, number)
      ? alert('This contact is already exists')
      : this.setState({ contacts: updatedContacts });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div style={wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h1>Contacts</h1>

        <Filter onChange={this.filterChange} value={this.state.filter} />

        {this.state.contacts && (
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
