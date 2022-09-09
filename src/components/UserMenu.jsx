import { useDispatch } from 'react-redux';
import { logOut } from '../redux/requestUser';
import { useSelector } from 'react-redux';
import style from './ContactForm.module.css';

export const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  return (
    <div className={style.logOutWrap}>
      {email}
      <button
        className={style.logOutButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
