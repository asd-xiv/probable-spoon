const debug = require("debug")("probable-spoon:TableUI")

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { is } from "@asd14/m"

import { useDrag } from "core.hooks/use-drag"
import { useTheme } from "core.hooks/use-theme"
import { useDom } from "core.hooks/use-dom"
import { deepReactMemo } from "core.hooks/use-deep"

import { FieldsUI } from "../ui.fields/fields"
import css from "./table.module.css"

const TableUI = ({
  id,
  inputs,
  outputs,
  fields,
  coordinates: [top, left],
  hasFocus,
  onMove,
  onMouseDown,
}) => {
  const [{ gridUnitSize }] = useTheme()
  const [domElement, reference] = useDom()
  const { onPickup } = useDrag({ id, onDrag: onMove })

  const { width } = is(domElement) ? domElement.getBoundingClientRect() : {}

  return (
    <div
      ref={reference}
      className={cx(css.table, {
        [css["table--has-focus"]]: hasFocus,
      })}
      style={{
        minWidth: is(width)
          ? Math.ceil(width / gridUnitSize) * gridUnitSize
          : undefined,
        left: `${left}px`,
        top: `${top}px`,
      }}
      onMouseDown={event => {
        if (is(onMouseDown)) {
          onMouseDown(event)
        }

        onPickup(event, { coordinates: [top, left] })
      }}>
      <div className={cx(css["input--main"])} />
      <div className={css.name}>{id}</div>
      <div className={css.divider}>---</div>
      <FieldsUI
        tableId={id}
        items={fields}
        inputs={inputs}
        outputs={outputs}
        hasTableFocus={hasFocus}
      />
    </div>
  )
}

TableUI.propTypes = {
  id: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  outputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  fields: PropTypes.shape(),
  coordinates: PropTypes.arrayOf(PropTypes.number),
  hasFocus: PropTypes.bool,
  onMove: PropTypes.func,
  onMouseDown: PropTypes.func,
}

TableUI.defaultProps = {
  inputs: [],
  outputs: [],
  fields: [],
  coordinates: [],
  hasFocus: false,
  onMove: undefined,
  onMouseDown: undefined,
}

const memo = deepReactMemo(TableUI)

export { memo as TableUI }
