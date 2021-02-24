import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const FormError = ({errorMessage}) => (
  <Form error>
    <Message
      error
      header={errorMessage}
      content={`${errorMessage}`}
    />
  </Form>
)

export default FormError