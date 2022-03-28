import React, { useContext } from "react"
import Auth from "./components/auth/Auth"
import { AuthContext } from "./context/auth-context"
import Dashboard from "./components/layouts/Dashboard.tsx"
function App() {
  const authContext = useContext(AuthContext)
  let content = <Auth />
  if (authContext.isAuth) {
    content = <Dashboard />
  }
  return content
}

export default App
