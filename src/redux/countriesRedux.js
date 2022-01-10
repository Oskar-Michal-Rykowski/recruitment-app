/* selectors */

export const getCountries = ({ countries }) => countries;

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    // case ADD_COUNTRY_SEARCH: {
    //   return {
    //     ...statePart.countries,
    //     searchingCountry: action.payload,
    //   };
    // }
    default:
      return statePart;
  }
};
