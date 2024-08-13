const TextArea = ({ id, placeholder, name, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-56 resize-none outline-none border rounded-md p-2 border-gray-700 focus:bg-slate-100 shadow-md"
      ></textarea>
    </div>
  );
};

export default TextArea;
