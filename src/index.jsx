const debug = require("debug")("asd14:Index")

import React from "react"
import { hot } from "react-hot-loader"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { stringify } from "qs"
import { set as setHTTPProps } from "@asd14/fetch-browser"

import { store } from "./index.redux"
import { AppRouter } from "./index.router"

import "core.ui/index.css"

setHTTPProps({
  // Prefix request urls with API_URL
  baseURL: process.env.API_URL,

  /**
   * Transform query object into string with `qs`
   *
   * @param {Object} source Request query object
   *
   * @returns {String} String appended to the URL
   */
  queryStringifyFn: source =>
    stringify(source, {
      allowDots: true,
      encode: false,
      arrayFormat: "brackets",
      strictNullHandling: true,
    }),
})

// Parcel hot reloading
if (module.hot) {
  module.hot.accept()
}

// React hot reloading
const App = hot(module)(() => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
))

render(<App />, document.getElementById("react-root"))

// activate debug logging when in development
if (process.env.NODE_ENV !== "production") {
  window.localStorage.setItem("debug", "asd14:*", "ReduxList:*")
}
