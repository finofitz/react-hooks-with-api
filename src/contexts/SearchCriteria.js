import React, { createContext } from "react";

// Reducer dispatcher & Context for the search criteria dropdowns....

export const criteriaReducer = (state, action) => {
    switch (action.type) {
      case 'OUTCOME_CHANGED':
        return {...state, outcome: action.payload};        
      default:
        throw new Error();
    }
  };

export const SearchContext = createContext();

export const SearchContextProvider = SearchContext.Provider
export const SearchContextConsumer = SearchContext.Consumer

//export default SearchContext
