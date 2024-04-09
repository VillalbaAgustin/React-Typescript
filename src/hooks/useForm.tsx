import { ChangeEvent, useState } from "react";

// export function useForm<T>(initialState: T) {
export const useForm = <T extends Object>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return {
    formState,
    handleChange,
  };
}
