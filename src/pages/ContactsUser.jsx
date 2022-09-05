import { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../components/ContactForm.module.css';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { addContact, filteredItems } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsUser = () => {
  const [name] = useState('');
  const [number] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.myContacts.items);
  const filter = useSelector(state => state.myContacts.filter);

  const handleSubmit = (evt, actions) => {
    if (items.find(el => el.name === evt.name)) {
      alert(`${evt.name} is already in contacs`);
      actions.resetForm();

      return;
    }

    const contactInput = {
      id: evt.name,
      name: evt.name,
      number: evt.number,
    };

    dispatch(addContact(contactInput));

    actions.resetForm();
  };

  const changeFilter = e => {
    dispatch(filteredItems(e.target.value));
  };

  const getVisibleContacts = () => {
    const filteredArr = items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredArr;
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <div className={style.allForm}>
        <h1>Phonebook</h1>
        <ContactForm
          initialValues={{ items, name, number, filter }}
          handleSubmit={handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter contact={items} filter={filter} changeFilter={changeFilter} />

        <ContactList visibleContacts={visibleContacts} />
      </div>
    </>
  );
};

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
