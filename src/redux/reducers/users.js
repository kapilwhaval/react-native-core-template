import { SET_USER, SET_ROLE, SET_LOCATION_PERMISSION } from "../constants";

let initialState = {
    user: null,
    role: null,
    isLocationPermission: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        case SET_ROLE:
            return { ...state, role: action.payload }
        case SET_LOCATION_PERMISSION:
            return { ...state, isLocationPermission: action.payload }
        default:
            return state;
    }
}

export default userReducer;