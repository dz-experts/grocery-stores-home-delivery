import React from "react"
import { Form, Button } from "semantic-ui-react"
import { InputField } from "./inputField/InputField"
import { mobilePhoneValidation, timeValidation } from "../../utils"
import { onFieldChange, onError } from "../../actions"
import { storeReducer, initialState } from "../../reducers"

const StoreForm = () => {
  const [state, dispatch] = React.useReducer(storeReducer, initialState)

  const onChange = (field, value) => {
    onFieldChange(field, value, dispatch)
  }

  const onSubmit = () => {
    if (!mobilePhoneValidation(state.store.phoneNumber)) {
      onError("phoneNumber", "Invalid Phone number!", dispatch)
    } else if (!timeValidation(state.store.openTime)) {
      onError("openTime", "Invalid open time!", dispatch)
    } else if (!timeValidation(state.store.closeTime)) {
      onError("closeTime", "Invalid closeTime!", dispatch)
    } else {
      // TODO
    }
  }

  return (
    <Form>
      <Form.Group widths={2}>
        <InputField
          required
          name="storeName"
          label="Store name"
          placeholder="Store name"
          onChange={onChange}
          error={state.error}
        />
        <InputField
          required
          name="phoneNumber"
          label="Store phone number"
          placeholder="Store phone number"
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <InputField
          required
          name="openTime"
          label="Open time"
          placeholder="e.g. 09:00"
          onChange={onChange}
          error={state.error}
        />
        <InputField
          required
          name="closeTime"
          label="Close time"
          placeholder="e.g. 17:00"
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <InputField
          name="note"
          label="Note"
          placeholder="e.g. doesn't open at Fridays"
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Button type="submit" onClick={() => onSubmit()}>
        Submit
      </Button>
    </Form>
  )
}

export { StoreForm }
