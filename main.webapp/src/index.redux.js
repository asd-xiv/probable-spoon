const debug = require("debug")("probable-spoon:Redux")

import { createStore, combineReducers } from "redux"

import * as stateSocket from "core.hooks/use-socket/socket.reducer"
import * as stateAuth from "core.hooks/use-auth/auth.reducer"
import * as useFocus from "core.hooks/use-focus"
import * as useTheme from "core.hooks/use-theme"
import * as useCommands from "core.hooks/use-commands"

import { SchemasList } from "./page.home/data/list.schemas"

const appReducer = combineReducers({
  [stateSocket.STORE_KEY]: stateSocket.reducer,
  [stateAuth.STORE_KEY]: stateAuth.reducer,
  [useFocus.STORE_KEY]: useFocus.reducer,
  [useTheme.STORE_KEY]: useTheme.reducer,
  [useCommands.STORE_KEY]: useCommands.reducer,

  [SchemasList.name]: SchemasList.reducer,
})

// Provide `appReducer` undefined as `state` param to force revert to default
// state when logging out
const rootReducer = (state, action) =>
  appReducer(action.type === "LOGOUT" ? undefined : state, action)

export const store = createStore(
  rootReducer,

  // Firefox redux extension
  process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
