import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AuthContextProvider from "./context/auth-context"
import "./assets/css/style.css"

/**
 * Bu bölümde Auth işlemini global olarak tanımlayabilmek için Context Api kullanarak AuthContextProvider'ı App'ın parentı olarak tanımladım
 * Bu şekilde bütün child componentlerde global state management'ı sağladım
 */

/**
 * Css olarak tailwindcss kullandım.
 * ui daha iyi olabilmesi için genel bir refactor edilebilir. Connection işlemlerinde custom hooklar yapılabilir.
 * Componentler daha da parçlanarak alt componentler türetilebilir.
 */
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
)
