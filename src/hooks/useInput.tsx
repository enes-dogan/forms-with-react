import { useState } from 'react';

export default function useInput(
  initialValue: string,
  validationFn: (val: string) => boolean
) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  function handleReset() {
    setEnteredValue(initialValue);
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    hasError: didEdit && !valueIsValid,
    handleReset,
    handleInputChange,
    handleInputBlur,
  };
}
