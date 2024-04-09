import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { IFormDate } from "../interfaces/formDate";

export const Form = () => {
  // const [formState, setFormState] = useState({
  //   email: "afdad",
  //   name: "ggggg",
  // });

  // const handleChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
  //   const {name, value} = target;
  //   setFormState({
  //     ...formState,
  //     [ name ]: value,
  //   })
  // }

  const { formState, handleChange } = useForm<IFormDate>({
    email: "aguas@gmail.com",
    name: "aguas",
    age: 30,
  });

  const { email, name, age } = formState;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={(ev) => handleChange(ev)}
          value={email}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name: </label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
          value={name}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age: </label>
        <input
          type="number"
          name="age"
          className="form-control"
          onChange={handleChange}
          value={age}
        />
      </div>
      
      <pre>{JSON.stringify(formState)}</pre>
    </form>
  );
};
