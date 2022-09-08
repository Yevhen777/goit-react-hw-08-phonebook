import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/requestUser';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import style from '../components/ContactForm.module.css';

export const LoginUser = () => {
  const dispatch = useDispatch();
  const isLoggin = useSelector(state => state.auth.logginIn);
  console.log(isLoggin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    console.log('e :>> ', e);
    console.log('email :>> ', email);
    console.log('password :>> ', password);
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <label className={style.registerLabel} htmlFor="email">
          Email
          <input
            className={style.registerInputEmail}
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.registerLabel} htmlFor="password">
          Password
          <input
            className={style.registerInput}
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={style.registerButton}>Log in</button>
      </form>
      <Outlet />
    </div>
  );
};
