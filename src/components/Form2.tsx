import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { IFormDate2 } from "../interfaces/formDate";

export const Form2 = () => {
  const { formState, handleChange } = useForm<IFormDate2>({
    postal: "",
    city: "",
  });

  const { postal, city } = formState;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Postal Number: 0000</label>
        <input
          type="text"
          name="postal"
          className="form-control"
          onChange={(ev) => handleChange(ev)}
          value={postal}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">City: Rosario</label>
        <input
          type="text"
          name="city"
          className="form-control"
          onChange={handleChange}
          value={city}
        />
      </div>
      <pre>{JSON.stringify(formState)}</pre>
    </form>
  );
};
