import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormSuccess = ({responsestatusText}) => (
  <Form success>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message
      success
      header={responsestatusText}
      content="Successfull login"
    />
    <Button>Submit</Button>
  </Form>
)

export default FormSuccess