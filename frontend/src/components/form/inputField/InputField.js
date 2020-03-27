import React from "react"
import { Form } from "semantic-ui-react"

const InputField = ({ name, label, placeholder, required, onChange, error }) => {
  return (
    <Form.Input
      required={required}
      label={label}
      placeholder={placeholder}
      onChange={(e) => onChange(name, e.currentTarget.value)}
      error={error[name]}
    />
  )
}

export { InputField }
