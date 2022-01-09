/* selectors */

export const getCountries = ({ countries }) => countries;
// export const getSearchingCountry = ({ searchingCountry }) => searchingCountry;

/* action name creator */
// const reducerName = "countries";
// const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
// const ADD_COUNTRY_SEARCH = createActionName("ADD_COUNTRY_SEARCH");

/* action creators */
// export const addCountrySearch = (payload) => ({
//   payload,
//   type: ADD_COUNTRY_SEARCH,
// });

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
