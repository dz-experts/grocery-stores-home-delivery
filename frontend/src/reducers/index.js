import { produce } from "immer"

export const storeReducer = (state, { type, field, value, error }) => {
  switch (type) {
    case "FIELD_CHANGE":
      return produce(state, (draftState) => {
        draftState.store[field] = value
        draftState.error = {}
      })
    case "ERROR":
      return produce(state, (draftState) => {
        draftState.error[field] = error
      })
    default:
      return state
  }
}

export const initialState = {
  store: {},
  error: {},
}
