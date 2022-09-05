import React, { useState } from "react";
import '../App.css';

function Form() {

  const [user, setUser] = useState({ name:"", id:"", email:""});
  const [errors, setErrors] = useState({ })

  function validate() {
    let errors = {} ;
    if(!user.name) {
      errors.name = "Debe llenar el campo de nombre"
      console.log(errors.name)
    }
    return errors
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (
      !errors.hasOwnProperty("name")
    ) {
      console.log(user.name)
      console.log("Registrado")
      /*setUser({
        name: "",
        id: "",
        email: ""
      })*/
    } else {
      console.log(user.name)
      console.log("No Registrado")
    }
  }

  function handleChange(e) {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...user,
      [e.target.name]: e.target.value
    }))
  }
  return (

    <section className="form" >
      <h1>Formulario</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre : </label>
        <input
          type="Text"
          placeholder="Nombre.."
          autoComplete="off"
          value={user.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        {errors.name && (<p>{errors.name}</p>)}

        <label> iD : </label>
        <input
          type="Number"
          placeholder="ID.."
          autoComplete="off"
          onChange={(e) => handleChange(e)}
          value={user.id}
          name="id"
        />
        <label>Email : </label>
        <input
          type="Email"
          placeholder="User@Email.com.."
          autoComplete="off"
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