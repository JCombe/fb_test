// data layer
export const initialState = {
    user: null,
}
// action for dispatching action into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
}

// return what the new data will look like
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default reducer