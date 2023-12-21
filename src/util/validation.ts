export function isEmail(value: string) {
  return value.includes('@');
}

export function isNotEmpty(value: string) {
  return value.trim() !== '';
}

export function hasMinLength(value: string, minLength: number = 6) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value: string, otherValue: string) {
  return value === otherValue;
}
