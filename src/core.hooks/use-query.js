const debug = require("debug")("asd14:useQuery")

import { useHistory, useLocation } from "react-router-dom"
import { stringify, parse } from "qs"

import { useMemo, useCallback } from "./use-deep"

/**
 * Get/Set query params via `qs` lib
 *
 * @returns {object}
 */
export const useQuery = () => {
  const { search } = useLocation()
  const history = useHistory()

  const queryParams = useMemo(() => parse(search.replace("?", "")), [search])

  const setQueryParams = useCallback(
    source => {
      history.push({
        search: stringify({ ...queryParams, ...source }),
      })
    },
    [history, queryParams]
  )

  return [queryParams, setQueryParams]
}
