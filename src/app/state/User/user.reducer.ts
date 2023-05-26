import { createReducer, on } from "@ngrx/store";
import { InitialState } from "./user.state";
import { addAccessToken, addFirstName, addLastName, addUserEmail, addUserId, addUserLogin } from "./user.actions";


const _userReducer = createReducer(
    InitialState,
    on(addUserEmail,(state,action) => {
        return {
            ...state,
            email: action.userEmail
        }
    }),
    on(addAccessToken,(state, action)=>{
        return {
            ...state,
            access_token: action.accessToken
        }
    }),
    on(addLastName,(state, action)=>{
        return {
            ...state,
            lastName: action.lastName
        }
    }),
    on(addFirstName,(state, action)=>{
        return {
            ...state,
            firstName: action.firstName
        }
    }),
    on(addUserId, (state,action)=>{
        return {
            ...state,
            userId: action.userId
        }
    }),
    on(addUserLogin, (state,action)=>{
        return {
            ...state,
            userLogin: action.userLogin
        }
    })
)

export function userReducer(state, action){
    return _userReducer(state, action);
}