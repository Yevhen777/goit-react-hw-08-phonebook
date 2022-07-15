import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (evt, actions) => {
    if (this.state.contacts.find(el => el.name === evt.name)) {
      alert(`${evt.name} is already in contacs`);
      actions.resetForm();
      return;
    }

    const contactInput = {
      id: evt.name,
      name: evt.name,
      number: evt.number,
    };
    const newContact = [...this.state.contacts, contactInput];

    this.setState({ contacts: newContact });

    actions.resetForm();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const filteredArr = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return filteredArr;
  };
  deleteContact = contactId => {
    this.setState(preState => ({
      contacts: preState.contacts.filter(
        contactEl => contactEl.id !== contactId
      ),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={style.allForm}>
        <h1>Phonebook</h1>
        <ContactForm
          initialValues={this.state}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter
          contact={this.state.contacts}
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />

        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
ContactForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
};

Filter.propTypes = {
  contact: PropTypes.array,
  filterState: PropTypes.string,
  handleFilter: PropTypes.func,
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
