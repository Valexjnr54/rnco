import { createAction, props } from "@ngrx/store";


export const addUserEmail = createAction(
    'addUserEmail',
    props<{userEmail: string}>()
)
export const addAccessToken = createAction(
    'addAccessToken',
    props<{accessToken: string}>()
)
export const addLastName = createAction(
    'addLastName',
    props<{lastName: string}>()
)
export const addFirstName = createAction(
    'addFirstName',
    props<{firstName: string}>()
)
export const addUserId = createAction(
    'addUserId',
    props<{userId: string}>()
)
export const addUserLogin = createAction(
    'addUserLogin',
    props<{userLogin: string}>()
)
export const clearUser = createAction('clearUser')