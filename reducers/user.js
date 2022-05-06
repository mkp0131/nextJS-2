const initState = {
  loggedIn: false,
  user: null,
  // signUpDate: {},
  // loginDate: {},
};

const LOGIN = 'login';
const LOGOUT = 'loginout';
// const DELETE_TODO = 'DELETE_TODO';

// action 을 동적으로 생성
export const loginAction = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.data,
      };
      break;

    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
