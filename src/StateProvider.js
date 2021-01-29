import React, { createContext, useContext, useReducer } from
    "react";

// preparing the data layer
export const StateContext = createContext();

// higher order component, for wrapping our app (within the StateProvider)
export function StateProvider({ reducer, initialState, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

// for pull something from the data layer use usesstateValue
export const useStateValue = () => useContext(StateContext);