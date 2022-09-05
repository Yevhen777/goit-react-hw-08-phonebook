export const UserMenu = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Выйти</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <button>Logout</button>
      </form>
    </div>
  );
};
