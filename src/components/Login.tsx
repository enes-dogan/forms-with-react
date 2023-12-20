import { useRef, useState } from 'react';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `email: ${emailRef.current!.value}, password: ${
        passwordRef.current!.value
      }`
    );

    emailRef.current!.value = '';
    passwordRef.current!.value = '';

    const emailIsValid = emailRef.current!.value.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    } else {
      setEmailIsInvalid(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ref Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
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
            ref={passwordRef}
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
