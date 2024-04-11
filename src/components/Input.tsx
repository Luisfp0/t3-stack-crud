interface inputPropType {
  placeholder: string;
  id?: string;
  name?: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<inputPropType> = ({placeholder, type, onChange, name}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs m-2"
      name={name}
      onChange={onChange}
    />
  );
}

export default Input
