import { LOGIN, BAD_LOGIN, LOGOUT } from '../actions/loginAction'

const initialState = {
   cid: null,
   username: '',
   isLoggedIn:false,
};

const userLogin = (state = initialState, action) => {
  debugger;
   switch (action.type) {
      case LOGIN:
         return {...state, isLoggedIn:true, success:true, errorMessage:null, loggedInData:action.payload };

      case LOGOUT:
         return {...state, isLoggedIn:false, success:true, errorMessage:"User has logged out." };

      default:
         return {...state};
   }
};

export default userLogin;
