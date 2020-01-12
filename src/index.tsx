import React from "react"
import ReactDOM from "react-dom"
import { App } from "src/components/pages/App"
import { GlobalStyles } from "src/components/styles/GlobalStyles"
import * as serviceWorker from "src/serviceWorker"
import "./index.css"

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
