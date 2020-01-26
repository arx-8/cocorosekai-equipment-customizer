import { SnackbarProvider } from "notistack"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { GoogleAnalytics } from "src/components/helpers/GoogleAnalytics"
import { Initializer } from "src/components/helpers/Initializer"
import { Notifier } from "src/components/helpers/Notifier"
import { App } from "src/components/pages/App"
import { GlobalStyles } from "src/components/styles/GlobalStyles"
import * as serviceWorker from "src/serviceWorker"
import { configureStore } from "src/store/store"

const reduxStore = configureStore()

const Root: React.FC = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <SnackbarProvider maxSnack={3}>
        <Notifier />
        <GoogleAnalytics />
        <GlobalStyles />
        <Initializer>
          <App />
        </Initializer>
      </SnackbarProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
