// Password validation
const validatePassword = (value) => {
  const errors = [];

  if (value.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }
  if (!/[a-z]/.test(value)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if (!/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    errors.push("Password must contain at least one symbol");
  }

  return errors;
};

export { validatePassword };

// Password validation
const validatePassword = (value) => {
  const errors = [];

  if (value.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }
  if (!/[a-z]/.test(value)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if (!/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    errors.push("Password must contain at least one symbol");
  }

  return errors;
};

export { validatePassword };
