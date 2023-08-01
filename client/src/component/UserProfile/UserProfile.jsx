import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./userProfile.css";
import { postUser } from "../../redux/actions/index";

const userProfile = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "Nombre requerido",
    surname: "Apellido requerido",
    email: "Email requerido",
    phone: "",
    password: "Password requerida",
  });

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const validate = (input, name) => {
    // console.log(name)
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Nombre requerido" });
      return;
    }
    if (name === "surname") {
      if (input.surname !== "") setErrors({ ...errors, surname: "" });
      else setErrors({ ...errors, surname: "Apellido requerido" });
      return;
    }
    if (name === "email") {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (input.email !== "") setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Email requerido" });

      if (regex.test(input.email)) setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Email tiene un formato erroneo" });

      return;
    }
    if (name === "password") {
    

    if(input.password !== "") setErrors({...errors, password:""});
    else setErrors({...errors, password:"Contraseña requerida"});


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(state));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    validate(
      {
        ...state,
        [e.target.name]: e.target.value,
      },
      e.target.name
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {console.log(errors)}
        <div>
          <label>Nombre</label>
          <input type="text" name="name" onChange={handleChange} />
          {errors.name}
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="surname" onChange={handleChange} />
          {errors.surname}
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange} />
          {errors.email}
        </div>
        <div>
          <label>Telefono</label>
          <input type="text" name="phone" onChange={handleChange} />
          {errors.phone}
        </div>
        <button disabled={disable()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default userProfile;
