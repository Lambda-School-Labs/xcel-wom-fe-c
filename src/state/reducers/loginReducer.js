const initialState = {
  isLoading: false,
  email: '',
  success: false,
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_SUBMITTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        success: true,
        email: state.email,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        success: false,
        email: '',
      };
    default:
      return state;
  }
};

export default loginReducer;
