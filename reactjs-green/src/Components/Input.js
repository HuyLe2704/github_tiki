
function Input(props) {
  const { className, placeholder, setValue, rules, type, value, style, checked, id } = props;

  const handleOnChange = (e) => {
    if (type === "checkbox") {
      setValue(e.target.checked);
    }
    else if (className && "typeNumber") {
      setValue(Number(e.target.value))
    } else {
      setValue(e.target.value);
    }

  };
  return (
    <input
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
      rules={rules}
      onChange={(e) => handleOnChange(e)}
      value={value}
      checked={checked}
      style={style}
    />
  );
}

export default Input;
