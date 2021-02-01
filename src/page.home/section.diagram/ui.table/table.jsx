const debug = require("debug")("mutant:TableUI")

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { findWith, is } from "@asd14/m"

import { FieldsUI } from "./fields"
import css from "./table.module.css"

const TableUI = ({
  id,
  inputs,
  outputs,
  data: { fields, hasMainInputLink, hasMainOutputLink },
}) => {
  const mainInput = findWith({ key: `${id}-input-main` }, null, inputs)
  const mainOutput = findWith({ key: `${id}-output-main` }, null, outputs)

  return (
    <div className={css.table}>
      {is(mainInput)
        ? React.cloneElement(mainInput, {
            className: cx(css["input--main"], {
              [css["input--active"]]: hasMainInputLink,
            }),
          })
        : null}

      {is(mainOutput)
        ? React.cloneElement(mainOutput, {
            className: cx(css["output--main"], {
              [css["output--active"]]: hasMainOutputLink,
            }),
          })
        : null}

      <div className={css.name}>{id}</div>
      <div className={css.divider}>---</div>

      <FieldsUI tableId={id} items={fields} inputs={inputs} outputs={outputs} />
    </div>
  )
}

TableUI.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ),
    hasMainInputLink: PropTypes.bool.isRequired,
    hasMainOutputLink: PropTypes.bool.isRequired,
  }),
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
  outputs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
}

TableUI.defaultProps = {
  data: { fields: [] },
  inputs: [],
  outputs: [],
}

export { TableUI }
