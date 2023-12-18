import { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [enteredValues, setEnteredValues] = useState(INITIAL_STATE);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `email: ${enteredValues.email}, password: ${enteredValues.password}`
    );

    setEnteredValues(INITIAL_STATE);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEnteredValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>STATE Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
