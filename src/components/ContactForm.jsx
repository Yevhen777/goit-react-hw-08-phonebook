import style from './ContactForm.module.css';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(
      /^[aA-zZ\s]+$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup.number().min(7).required(),
});

export const ContactForm = ({
  handleSubmit,

  initialValues,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={style.form} autoComplete="off">
        <label>
          <h3>Name</h3>
          <Field
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage component="div" className={style.error} name="name" />
        </label>
        <label>
          <h3>Number</h3>
          <Field
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage component="div" className={style.error} name="number" />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
