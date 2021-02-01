const debug = require("debug")("mutant:FieldsUI")

import React from "react"
import PropTypes from "prop-types"
import { reduce, pipe, map, findWith, is } from "@asd14/m"

import css from "./fields.module.css"

const toArray = pipe(
  Object.entries,
  reduce(
    (acc, [key, value]) => [
      ...acc,
      {
        id: key,
        ...(typeof value === "string" ? { type: value } : value),
      },
    ],
    []
  )
)

const FieldsUI = ({ tableId, items, outputs, level = 0 }) => {
  return (
    <div className={css.fields}>
      {map(item => {
        const fieldOutput = findWith(
          { key: `${tableId}-output-${item.id}` },
          null,
          outputs
        )

        return (
          <React.Fragment key={item.id}>
            {level === 0 &&
            (item.type === "array" || item.type === "object") ? (
              <br />
            ) : null}

            <div className={css.field}>
              <div className={css["field-name"]}>{`${level === 0 ? "" : "| "}${
                item.id
              }`}</div>
              <div className={css["field-type"]}>
                {item.type === "array"
                  ? "[]"
                  : item.type === "object"
                  ? "{}"
                  : item.type}
              </div>

              {is(fieldOutput)
                ? React.cloneElement(fieldOutput, {
                    className: css["field-output"],
                  })
                : null}
            </div>

            {item.type === "array" || item.type === "object" ? (
              <FieldsUI
                tableId={tableId}
                items={item.items}
                level={level + 1}
              />
            ) : null}
          </React.Fragment>
        )
      }, toArray(items))}
    </div>
  )
}

FieldsUI.propTypes = {
  tableId: PropTypes.string.isRequired,
  items: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ),
  }),
  outputs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
  level: PropTypes.number,
}

FieldsUI.defaultProps = {
  items: {},
  level: 0,
  outputs: [],
}

export { FieldsUI }
