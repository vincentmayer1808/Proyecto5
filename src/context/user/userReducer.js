export const types = {
  setUserState: "{USER} Set User State",
};

const userReducer = (state, action = {}) => {
  switch (action.type) {
    case types.setUserState:
      return {
        ...state,
        user: action.payload,
      };
    case types.desconectUser:
      return {
        ...state,
        user: null,
      };
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
