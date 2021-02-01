const debug = require("debug")("asd14:IndexApp")

import React from "react"
import { Provider } from "react-redux"

import { store } from "./index.redux"
import { AppRouter } from "./index.router"

import "core.ui/index.css"

export const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
