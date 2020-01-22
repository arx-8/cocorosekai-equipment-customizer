import React, { Fragment, useEffect } from "react"
import { migrateReduxState } from "src/data/localstorage"

type Props = {
  // NOP
}

export const Initializer: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // 1 回 migrate すれば十分なため、deps は空
    migrateReduxState()
  }, [])

  return <Fragment> {children}</Fragment>
}
