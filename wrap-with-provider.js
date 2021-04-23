/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state"

export default ({ element }) => <Provider store={store}>{element}</Provider>
