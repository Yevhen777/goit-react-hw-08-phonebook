import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [name] = useState('');
  const [number] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contact = localStorage.getItem('contacts');
    const parse = JSON.parse(contact);
    console.log('parse :>> ', parse);

    if (parse) {
      setContacts(parse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (evt, actions) => {
    if (contacts.find(el => el.name === evt.name)) {
      alert(`${evt.name} is already in contacs`);
      actions.resetForm();
      return;
    }

    setContacts(prevState => {
      const contactInput = {
        id: evt.name,
        name: evt.name,
        number: evt.number,
      };
      const newContact = [...prevState, contactInput];

      return newContact;
    });

    actions.resetForm();
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const filteredArr = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredArr;
  };
  const deleteContact = contactId => {
    setContacts(prevState => {
      const filteredContacts = prevState.filter(
        contactEl => contactEl.id !== contactId
      );
      return filteredContacts;
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={style.allForm}>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={{ contacts, name, number, filter }}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter contact={contacts} filter={filter} changeFilter={changeFilter} />

      <ContactList
        visibleContacts={visibleContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
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
