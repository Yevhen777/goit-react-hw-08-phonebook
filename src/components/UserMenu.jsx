import { useDispatch } from 'react-redux';
import { logOut } from '../redux/requestUser';
// import style from '../components/ContactForm.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
};
