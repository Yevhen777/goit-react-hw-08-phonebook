import { Outlet } from 'react-router-dom';

export const LoginUser = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" name="email" />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" id="password" name="password" />
          </label>

          <button>Log in</button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};
