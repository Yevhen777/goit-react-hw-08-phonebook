// import { useState } from 'react';
// import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../redux/requestUser';
import style from '../components/ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const RegisterUser = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (e, actions) => {
    console.log(e);
    dispatch(register(e));
    // setName('');
    // setEmail('');
    // setPassword('');
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        className={style.registerForm}
        onSubmit={handleSubmit}
      >
        <Form className={style.registerForm} autoComplete="off">
          <label className={style.registerLabel} htmlFor="user">
            Name
            <Field
              className={style.registerInputName}
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage component="div" className={style.error} name="name" />
          </label>

          <label className={style.registerLabel} htmlFor="email">
            Email
            <Field
              className={style.registerInputEmail}
              type="text"
              id="email"
              name="email"
            />
            <ErrorMessage
              component="div"
              className={style.error}
              name="email"
            />
          </label>

          <label className={style.registerLabel} htmlFor="password">
            Password
            <Field
              className={style.registerInput}
              type="text"
              id="password"
              name="password"
            />
            <ErrorMessage
              component="div"
              className={style.error}
              name="password"
            />
          </label>

          <button className={style.registerButton} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
