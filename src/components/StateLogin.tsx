import Input from './Input.tsx';
import useInput from '../hooks/useInput.tsx';
import { isEmail, hasMinLength } from '../util/validation.ts';

export default function Login() {
  const {
    value: emailValue,
    hasError: emailHasError,
    handleReset: emailReset,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput('', isEmail);

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleReset: passwordReset,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput('', value => hasMinLength(value, 8));

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailHasError || passwordHasError) return;

    console.log(`email: ${emailValue}, password: ${passwordValue}`);

    emailReset();
    passwordReset();
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
          error={emailHasError ? 'Please enter a vaild email adress.' : ''}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordHasError ? 'Please enter a vaild password.' : ''}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
