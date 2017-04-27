import jwtDecode from 'jwt-decode';

const _doAuthentication = (endpoint, values) =>
  fetchWithHeaders(`api/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
  });

const _checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return error;
  }
};

const login = (email, password) =>
  _doAuthentication('users/authenticate', { email, password });

const signup = ({ firstName, lastName, email, password, classString }) =>
  _doAuthentication('users', {
    email,
    password,
    class: classString,
    firstName,
    lastName,
  });

const checkIfExists = email =>
  _doAuthentication('users/check', {
    email,
  });

const isAuthenticated = () => {
  // Checks if there is a saved token and it's still valid
  const token = localStorage.getItem('token');
  return token !== null;
};

const getToken = () => localStorage.getItem('token');

const isAdmin = () => jwtDecode(getToken()).professor;

const finishAuthentication = (token) => {
  localStorage.setItem('token', token);
};

const logout = () => {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('token');
};

const fetchWithHeaders = (url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (isAuthenticated()) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  return fetch(url, {
    headers,
    ...options,
  }).then(response => response.json());
};

export {
  _doAuthentication,
  _checkStatus,
  login,
  signup,
  checkIfExists,
  isAuthenticated,
  isAdmin,
  finishAuthentication,
  getToken,
  logout,
  fetchWithHeaders,
};
