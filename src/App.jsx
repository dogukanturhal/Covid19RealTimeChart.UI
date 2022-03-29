import React, { useContext } from "react"
import Auth from "./components/auth/Auth.jsx"
import { AuthContext } from "./context/auth-context"
import Dashboard from "./components/layouts/Dashboard.tsx"

/**
 * Bu bölümde AuthContext eğerki isAuth true olursa kullanıcı authenticate olmuş olacak ve dashboard componenti gösterilecektir.
 */
function App() {
  const authContext = useContext(AuthContext)
  let content = <Auth />
  if (authContext.isAuth) {
    content = <Dashboard />
  }
  return content
}

export default App
