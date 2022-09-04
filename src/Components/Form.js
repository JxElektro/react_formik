import React, { useState } from "react";
import '../App.css';

function Form() {

  const [user, setUser] = useState({ name: "", id: "", email: "" })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(user)
    setUser({
      name: "",
      id: "",
      email: ""
    })
  }

  function handleChange(e) {
    e.preventDefault()

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (

    <section className="form" >
      <h1>Formulario</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre : </label>
        <input
          type="Text"
          placeholder="Nombre.."
          autoComplete="on"
          value={user.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <label> ID : </label>
        <input
          type="Number"
          placeholder="ID.."
          autoComplete="on"
          onChange={(e) => handleChange(e)}
          value={user.id}
          name="id"
        />
        <label>Email : </label>
        <input
          type="Email"
          placeholder="User@Email.com.."
          autoComplete="on"
          onChange={(e) => handleChange(e)}
          value={user.email}
          name="email"
        />
        <button type="submit" >Submit</button>
      </form>



    </section>
  )
}

export default Form;