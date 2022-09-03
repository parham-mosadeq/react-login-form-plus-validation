export const validator = (data, type) => {
  const errors = {};
  const emailValidation = /\S+@\S+\.\S+/;
  // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (type === 'signup') {
    if (!data.name.trim()) {
      errors.name = 'Please enter an valid name';
    } else {
      delete errors.name;
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Your password doesn't match";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = 'You have not accepted our terms of policy';
    } else {
      delete errors.isAccepted;
    }
  }

  if (!emailValidation.test(data.email)) {
    errors.email = 'Please enter an valid email';
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = 'Please enter a valid password';
  } else if (data.password.length < 6) {
    errors.password = 'Your password needs to be 6 characters or more';
  } else {
    delete errors.password;
  }

  return errors;
};
