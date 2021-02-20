const debug = require("debug")("probable-spoon:HomePage")

import React, { useCallback, useEffect } from "react"

import { useList } from "core.hooks/use-list"
import { useQuery } from "core.hooks/use-query"
import { ErrorBoundaryUI } from "core.ui/error-boundary/error-boundary"

import { SchemasList } from "./data/list.schemas"
import { DiagramSection } from "./section.diagram/diagram"
import { EditorSection } from "./section.editor/editor"

import css from "./home.module.css"

export const HomePage = () => {
  const [{ schemaId: querySchemaId }] = useQuery()
  const {
    selector: { byId, hasWithId },
    read,
    update,
  } = useList(SchemasList)

  useEffect(() => {
    read()
  }, [read])

  const { schema, coordinates } = byId(querySchemaId, {})

  const handleSchemaUpdate = useCallback(
    (id, data) => {
      update(id, {
        schema: data,
      })
    },
    [update]
  )

  const handleTableMove = useCallback(
    (id, data) => {
      update(querySchemaId, {
        tableId: id,
        coordinates: data,
      })
    },
    [querySchemaId, update]
  )

  return hasWithId(querySchemaId) ? (
    <div className={css.schema}>
      <div>
        <ErrorBoundaryUI>
          <DiagramSection
            source={schema}
            coordinates={coordinates}
            onMove={handleTableMove}
          />
        </ErrorBoundaryUI>
      </div>
      <div>
        <ErrorBoundaryUI>
          <EditorSection
            id={querySchemaId}
            value={schema}
            onChange={handleSchemaUpdate}
          />
        </ErrorBoundaryUI>
      </div>
    </div>
  ) : null
}
