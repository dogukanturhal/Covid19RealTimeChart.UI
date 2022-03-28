import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AuthContextProvider from "./context/auth-context"
import "./assets/css/style.css"

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
