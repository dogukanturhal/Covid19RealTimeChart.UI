const Card = (props) => {
  return (
    <div className="flex flex-col w-full max-w-md px-4 my-14 py-8 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        {props.children}
      </div>
    </div>
  )
}
export default Card
