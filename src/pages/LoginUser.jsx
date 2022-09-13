import { useDispatch } from 'react-redux';
import { logIn } from '../redux/requestUser';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../components/ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginUser = () => {
  const dispatch = useDispatch();
  const isLoggin = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
    if (e.target.elements.password.value.trim() === '') {
      toast('Please enter a password!');
      return;
    } else if (e.target.elements.email.value.trim() === '') {
      toast('Please enter your email!');
    }
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
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={style.registerButton}>Log in</button>
      </form>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default LoginUser;
