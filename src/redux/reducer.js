const initialState = {
    user: {}
}

const LOGIN_USER = 'LOGIN_USER';
const CLEAR_USER = 'CLEAR_USER';

export function loginUser(userObj){
    return {
        type: LOGIN_USER,
        payload: userObj
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case LOGIN_USER:
            return {...state, user: payload};
        case CLEAR_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}