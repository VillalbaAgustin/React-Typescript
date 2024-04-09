import { ChangeEvent, useState } from "react";

export const Form = () => {
  const [formState, setFormState] = useState({
    email: "afdad",
    name: "ggggg",
  });

  const handleChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value,
    })
  }

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input type="email" name="email" className="form-control" onChange={(ev) => handleChange(ev)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Name: </label>
        <input type="text" name="name" className="form-control" onChange={handleChange}/>
      </div>
      <pre>{JSON.stringify(formState)}</pre>
    </form>
  );
};
