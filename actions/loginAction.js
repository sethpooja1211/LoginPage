export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export  function loginAction(login,password) {
   return {
       type: LOGIN,
       payload:{
        login,
      }
   }
}

export  function logoutAction() {
   return {
       type: LOGOUT,
   }
}
