export const types = {
    setServicesState: "{SERVICES} set services state",
    setServiceState: "{SERVICE} set service state",
    setError:"[SERVICE] error"
  };
  
  const servicesReducer = (state, action = {}) => {
    switch (action.type) {
      case types.setServicesState:
        return {
          ...state,
          services: action.payload,
        };
      case types.setServiceState:
        return {
          ...state,
          service: action.payload,
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
  