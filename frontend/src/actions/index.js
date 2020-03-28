export const onError = (field, error, dispatch) => {
  dispatch({
    type: "ERROR",
    field: field,
    error: error,
  })
}

export const onFieldChange = (field, value, dispatch) => {
  dispatch({
    type: "FIELD_CHANGE",
    field: field,
    value: value,
  })
}
