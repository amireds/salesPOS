import axios from "axios";

const baseUrl = "http://pos.appsthing.com";
let userData = null;

export const loginUser = async (values) => {
  const response = await axios.post(`${baseUrl}/api/user/authenticate`, {
    email: values.email,
    password: values.password,
  });
  try {
    return response.data;
  } catch (e) {
    return e;
  }
};

export const setUserData = (data) => {
  userData = data;
};

export const getUserData = () => {
  return userData;
};
