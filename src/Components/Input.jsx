const Input = ({ htmlfor, label, type, id, placeholder, value,onChange }) => {
  return (
    <div className="flex justify-center mt-8   ">
      <div className="flex-col">
        <label
          htmlFor={htmlfor}
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
