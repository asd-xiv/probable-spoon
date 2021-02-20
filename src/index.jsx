const debug = require("debug")("probable-spoon:Index")

import React from "react"
import { render } from "react-dom"
import { set as setHTTPProperties } from "@asd14/fetch-browser"
import { stringify } from "qs"
import { Provider } from "react-redux"

import { store } from "./index.redux"
import { AppRouter } from "./index.router"

import "core.ui/index.css"

setHTTPProperties({
  // Prefix relative path
  baseURL: process.env.API_URL,

  /**
   * Transform query object into string with `qs`
   *
   * @param   {Object} source Request query object
   *
   * @returns {string}        String appended to the URL
   */
  queryStringifyFn: source =>
    stringify(source, {
      allowDots: true,
      encode: false,
      arrayFormat: "brackets",
      strictNullHandling: true,
    }),
})

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector("#react-root")
)

// activate debug logging when in development
if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "probable-spoon:*,JustAList:*")
}
