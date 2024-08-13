const Card = ({children}) => {
  return (
    <div className="border border-gray-700 rounded-md p-5 hover:bg-slate-100">
{children}
    </div>
  )
}

export default Card