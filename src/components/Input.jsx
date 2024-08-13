const Input = ({ id, placeholder, name, label, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full outline-none border rounded-md p-2 border-gray-700 focus:bg-slate-100 shadow-md"
      />
    </div>
  );
};

export default Input;
