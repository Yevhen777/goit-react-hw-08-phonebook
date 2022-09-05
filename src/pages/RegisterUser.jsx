import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from '../redux/requestUser';

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button>Register</button>
      </form>
    </div>
  );
};
