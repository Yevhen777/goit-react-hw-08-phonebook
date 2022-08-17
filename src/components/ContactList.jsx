import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import { deleteContact } from '../redux/store';
import { useDispatch } from 'react-redux';

export const ContactList = ({ visibleContacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li className={style.addContact} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={style.btn}
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
