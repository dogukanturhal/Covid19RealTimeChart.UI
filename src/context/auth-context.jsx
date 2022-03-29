import React, { useState } from "react"

/*

  Bu bölümde AuthContext içerisinde state yönetimi gerçekleştirdim.
  loginHandler tetiklendiğinde isAuth true olarak değişmekte ve kullanıcı authenticate olmaktadır.
  AuthContext.Provider'ın içerisinde props.children kullanarak alt componentlerinde içerisinde olan verileri render edebilmektedir.
*/

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
})

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginHandler = () => {
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth: isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
