import { useState } from "react"
import { IUser } from "../interfaces/user";

export const User = () => {
  const [user, setUser] = useState<IUser>();

  const login = () => {
    setUser({
      uid: 'abc123',
      name: 'Aguas Villalba',
      age: 24
    })
  }

  return (
    <div className="mt-5">
      <h3> User: </h3>

      <button className="btn btn-outline-primary" onClick={ login }>Login</button>

      {
        (!user)
      ? <pre> User undefined </pre> 
      : <pre> {JSON.stringify(user)} </pre> 
      }
    </div>
  )
}