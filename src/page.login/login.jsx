const debug = require("debug")("probable-spoon:LoginPage")

import React from "react"
import { isEmpty } from "@asd14/m"
import { useHistory } from "react-router-dom"

import { useQuery } from "core.hooks/use-query"
import { useAuth } from "core.hooks/use-auth/auth.hook"
import { getPath } from "core.libs/routes"

// Entry point from email with one-time-token to be exchanged for a JWT
const LoginPage = () => {
  const history = useHistory()
  const [{ token }] = useQuery()
  const { loginWithOTT } = useAuth()

  if (isEmpty(token)) {
    history.push(getPath("guest.home"))
  } else {
    // Do not trigger any other actions before this.
    // It will go into infinite loop since this method is triggered before
    // rendering the App.
    loginWithOTT({ token })
      .then(() => {
        history.push(getPath("users.profile"))
      })
      .catch(() => {
        history.push(getPath("guest.home"))
      })
  }

  return <center>Loggin in ...</center>
}

export { LoginPage }
