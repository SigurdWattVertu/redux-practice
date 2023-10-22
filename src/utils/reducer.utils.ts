import { AnyAction } from 'redux'

export type ActionWithPayload<T, P> = {
    type: T
    payload: P
}

export type Action<T> = {
    type: T
}

// This is function overloading
// We need to use the classic function decleration style for some reason here (rather than arrow function)
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>

// payload = void - means you are not expecting anything
export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}
