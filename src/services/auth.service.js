const { default: firebase } = require("../utils/firebase");

export const LoginServiceGoogleWithEmailAndPass = async ({
  email,
  password,
}) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return response;
};
export const RegisterServiceGoogleWithEmailAndPass = async ({
  email,
  password,
}) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return response;
};
