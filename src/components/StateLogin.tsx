import { useState } from 'react';

import Input from './Input.tsx';

const INITIAL_STATE = {
  email: '',
  password: '',
};
const INITIAL_DID_EDIT = { email: false, password: false };
export default function Login() {
  const [enteredValues, setEnteredValues] = useState(INITIAL_STATE);
  const [didEdit, setDidEdit] = useState(INITIAL_DID_EDIT);

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `email: ${enteredValues.email}, password: ${enteredValues.password}`
    );

    setEnteredValues(INITIAL_STATE);
    setDidEdit(INITIAL_DID_EDIT);
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid ? 'Please enter a vaild email adress.' : ''}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredValues.email}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid ? 'Please enter a vaild password.' : ''}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredValues.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
