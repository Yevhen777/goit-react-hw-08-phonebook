import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from '../redux/requestUser';
import style from '../components/ContactForm.module.css';

export const RegisterUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <label className={style.registerLabel} htmlFor="user">
          Name
          <input
            className={style.registerInputName}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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

        <button className={style.registerButton}>Register</button>
      </form>
    </div>
  );
};
