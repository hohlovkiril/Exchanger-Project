import { useState } from "react";

import { useAuth } from "../../providers/auth.provider";
import { LoginForm } from "../../components/widgets";

export default function LogInPage() {
  
  /** Context */

  const { onLogin } = useAuth();

  /** States */

  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <>
      <LoginForm
        errorMessage={errorMessage}
        credentials={{
          fields: [
            {
              formKey: 'usernameOrEmailOrPhone',
              label: 'Login',
              type: 'text',
              required: true,
            },
            {
              formKey: 'password',
              label: 'Password',
              type: 'password',
              required: true,
            }
          ]
        }}
        onChange={(payload) => onLogin(payload).catch((err) => setErrorMessage(err.message))}
      />
    </>
  )
}