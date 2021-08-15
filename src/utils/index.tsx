const TOKEN_KEY = "jwt";
// export const register = () => {
//  if (localStorage.setItem(TOKEN_KEY, "string")) {
//    return true;
//  }

//  return false;
// }


export const login = () => {
  localStorage.setItem(TOKEN_KEY, "TestLogin");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
