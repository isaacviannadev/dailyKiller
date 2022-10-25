export const isEmail = (value: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};

export const validateForm = (form: any) => {
  const errors: any = {};
  Object.keys(form).forEach((key) => {
    if (!form[key]) {
      errors[key] = 'This field is required';
    }
  });
  return errors;
};

// test is email is a gmail address
export const isGmail = (value: string) => {
  const gmailRegex = /@gmail.com$/;
  return gmailRegex.test(value);
}
