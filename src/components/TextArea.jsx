const TextArea = ({id, placeholder, name, label}) => {
  return (
    <div>
      <label htmlFor={id} >{label}</label>    
      <textarea name={name} id={id} placeholder={placeholder} className="w-full h-56 resize-none outline-none border rounded-md p-2 border-gray-700 focus:bg-slate-100 shadow-md"></textarea>
    </div>
  )
}

export default TextArea