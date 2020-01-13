import React, { useEffect } from "react"
import ReactGA from "react-ga"
import { GOOGLE_ANALYTICS_TRACKING_CODE } from "src/constants/env"

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE)

type Props = {
  children?: never
}

export const GoogleAnalytics: React.FC<Props> = () => {
  useEffect(() => {
    const { pathname } = window.location
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }, [])

  return null
}
