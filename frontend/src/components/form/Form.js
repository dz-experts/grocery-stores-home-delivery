import React from "react"
import { Form, Button } from "semantic-ui-react"
import { InputField } from "./inputField/InputField"
import { mobilePhoneValidation, timeValidation } from "../../utils"
import { onFieldChange, onError } from "../../actions"
import { storeReducer, initialState } from "../../reducers"
import { useTranslation } from "react-i18next"
import { withSuspense } from "../../HOC"

const StoreForm = withSuspense(() => {
  const [state, dispatch] = React.useReducer(storeReducer, initialState)
  const [t] = useTranslation('StoreForm')

  const onChange = (field, value) => {
    onFieldChange(field, value, dispatch)
  }

  const onSubmit = () => {
    if (!mobilePhoneValidation(state.store.phoneNumber)) {
      onError("phoneNumber", t("phoneNumber.error"), dispatch)
    } else if (!timeValidation(state.store.openTime)) {
      onError("openTime", t("openTime.error"), dispatch)
    } else if (!timeValidation(state.store.closeTime)) {
      onError("closeTime", t("closeTime.error"), dispatch)
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
          label={t('storeNameLabel')}
          placeholder={t('storeNameLabel')}
          onChange={onChange}
          error={state.error}
        />
        <InputField
          required
          name="phoneNumber"
          label={t('phoneNumber.label')}
          placeholder={t('phoneNumber.label')}
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <InputField
          required
          name="openTime"
          label={t('openTime.label')}
          placeholder={t('openTime.placeholder')}
          onChange={onChange}
          error={state.error}
        />
        <InputField
          required
          name="closeTime"
          label={t('closeTime.label')}
          placeholder={t('closeTime.placeholder')}
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <InputField
          name="note"
          label={t('note.label')}
          placeholder={t('note.placeholder')}
          onChange={onChange}
          error={state.error}
        />
      </Form.Group>
      <Button type="submit" onClick={() => onSubmit()}>
        {t('submit')}
      </Button>
    </Form>
  )
});

export { StoreForm }
