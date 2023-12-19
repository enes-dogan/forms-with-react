import { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [enteredValues, setEnteredValues] = useState(INITIAL_STATE);
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

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
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [name]: false,
    }));
  }

  function handleInputBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [name]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>State Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a vaild email adress.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handleInputBlur}
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
