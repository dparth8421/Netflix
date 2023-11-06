const checkValidation = (Email, Password, Name) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    Password
  );
  const isName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(Name);

  if (!isEmail) return "Email is not valid";
  if (!isPassword) return "Password is not valid";
  if (!isName) return "Name not valid";

  return null;
};

export default checkValidation;
