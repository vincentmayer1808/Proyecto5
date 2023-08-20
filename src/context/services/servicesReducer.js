export const types = {
    setServicesState: "{SERVICES} set services state",
  };
  
  const servicesReducer = (state, action = {}) => {
    switch (action.type) {
      case types.setServicesState:
        return {
          ...state,
          services: action.payload,
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
  
  export default servicesReducer;
  