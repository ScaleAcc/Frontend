import { FloatingLabel } from '@components/forms'
import React from 'react'
const Login = () => {
  return (
    <div className="login__form">
        <form>
          <FloatingLabel type="email" label="Email"/>
          <FloatingLabel type="password" label="Password"/>
        </form>
    </div>
  )
}

export default Login