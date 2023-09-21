export const authProvider = {
  //when the user tries to log in , it will be called
  login: ({ username }) => {
    localStorage.setItem("username", username);
    //all username/passwords are accepted
    return Promise.resolve();
  },
  //when the user clicks on the logout button, it will be called
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  //when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  //when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  //when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

//The authProvider exposes 5 methods, in order of what happens and each of them return a Promise
//Promise represents the completion of an asynchronous operation and its resulting value
