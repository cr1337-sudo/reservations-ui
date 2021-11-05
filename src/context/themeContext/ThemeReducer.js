const ThemeReducer = (action, state) => {
  switch (action.type) {
    case "SET_THEME_LIGHT":
      return {
        theme: "light",
      };
    case "SET_THEME_DARK":
      return {
        theme: "dark",
      };
    default:
      return { ...state };
  }
};

export default ThemeReducer;
