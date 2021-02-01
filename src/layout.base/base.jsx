const debug = require("debug")("asd14:BaseLayout")

import React from "react"
import PropTypes from "prop-types"

import css from "./base.module.css"

const BaseLayout = ({ children }) => {
  return <div className={css["base-layout"]}>{children}</div>
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { BaseLayout }
