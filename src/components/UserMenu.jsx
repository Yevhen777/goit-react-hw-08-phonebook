import { useDispatch } from 'react-redux';
import { logOut } from '../redux/requestUser';
import style from '../components/ContactForm.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form className={style.logouteForm} onSubmit={handleSubmit}>
        <label className={style.logouteLabel} htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" />

        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </form>
    </>
  );
};
