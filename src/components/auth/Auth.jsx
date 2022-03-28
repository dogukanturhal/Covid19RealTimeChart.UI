import React, { useContext } from "react"
import { AuthContext } from "../../context/auth-context"
import Card from "../UI/Card/Card"
const Auth = (props) => {
  const authContext = useContext(AuthContext)

  const loginHandler = () => {
    console.log("Work")
    authContext.login()
  }
  return (
    <React.Fragment>
      <Card>
        <p className=" mb-5">You are not authenticated!</p>
        <button
          onClick={loginHandler}
          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Login
        </button>
      </Card>
    </React.Fragment>
  )
}
export default Auth
