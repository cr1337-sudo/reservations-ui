const SummaryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "CHANGE_HOUR":
      return {
        ...state,
        hour: action.hour,
      };
    default:
      return { ...state };
  }
};

export default SummaryReducer;
