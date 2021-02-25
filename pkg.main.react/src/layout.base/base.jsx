const debug = require("debug")("probable-spoon:BaseLayout")

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import { useTheme } from "core.hooks/use-theme"

import css from "./base.module.css"

const BaseLayout = ({ children }) => {
  const [{ themeClass, sizeClass }] = useTheme()

  return (
    <div className={cx(css["base-layout"], themeClass, sizeClass)}>
      {children}
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { BaseLayout }
