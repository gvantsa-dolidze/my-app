const Input = ({ id, placeholder, name, label, type }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full outline-none border rounded-md p-2 border-gray-700 focus:bg-slate-100 shadow-md"
      />
    </div>
  );
};

export default Input;
