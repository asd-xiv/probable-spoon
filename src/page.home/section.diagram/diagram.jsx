const debug = require("debug")("mutant:DiagramSection")

import React from "react"
import PropTypes from "prop-types"
import {
  push,
  pipe,
  keys,
  filter,
  read,
  map,
  reduce,
  toLower,
  hasKey,
} from "@asd14/m"
import { Diagram, createSchema, useSchema } from "beautiful-react-diagrams"

import { startsWithUpperCase } from "core.libs/var"

import { TableUI } from "./ui.table/table"

import "./diagram.module.css"

const toNodes = ({ schema, coordinates }) => {
  const schemaEntries = Object.entries(schema)

  const isSchemaObject = source => hasKey(toLower(source), schema)

  const links = reduce(
    (acc, [key, value]) => {
      return [
        ...acc,
        ...pipe(
          keys,
          filter(
            source => startsWithUpperCase(source) && isSchemaObject(source)
          ),
          map(item => ({
            input: `${toLower(item)}`,
            output: `${key}-output-${item}`,
            label: read([item, "verb"], "hasMany", value),
            readOnly: true,
          }))
        )(value),
      ]
    },
    [],
    schemaEntries
  )

  const nodes = reduce(
    (acc, [key, value]) => {
      debug({ key, value })

      return [
        ...acc,
        {
          id: key,
          content: key,
          render: TableUI,
          inputs: [{ id: `${key}-input-main` }],
          outputs: pipe(
            keys,
            filter(
              source => startsWithUpperCase(source) && isSchemaObject(source)
            ),
            map(item => ({ id: `${key}-output-${item}` })),
            push({ id: `${key}-output-main` })
          )(value),
          coordinates: read(key, [100, 100], coordinates),
          data: {
            fields: value,
            hasMainInputLink: true,
            hasMainOutputLink: false,
          },
        },
      ]
    },
    [],
    schemaEntries
  )

  debug({ nodes })

  return { nodes, links }
}

const DiagramSection = ({ schema, coordinates }) => {
  const [beautifullSchema, { onChange }] = useSchema(
    createSchema(toNodes({ schema, coordinates }))
  )

  return <Diagram schema={beautifullSchema} onChange={onChange} />
}

DiagramSection.propTypes = {
  schema: PropTypes.shape(),
  coordinates: PropTypes.shape(),
}

DiagramSection.defaultProps = {
  schema: {},
  coordinates: {},
}

export { DiagramSection }
