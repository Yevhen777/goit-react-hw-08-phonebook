import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
// import { deleteContact } from '../redux/store';

import { useDeleteContactMutation, useGetContactsQuery } from '../redux/store';

export const ContactList = ({ visibleContacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  // const [data] = useGetContactsQuery();
  const { data } = useGetContactsQuery();

  console.log('data :>> ', visibleContacts);

  return (
    <ul>
      {data && (
        <>
          {visibleContacts.map(contact => {
            return (
              <li className={style.addContact} key={nanoid()}>
                {contact.name}: {contact.number}
                <button
                  className={style.btn}
                  onClick={() => deleteContact(contact.id)}
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};
