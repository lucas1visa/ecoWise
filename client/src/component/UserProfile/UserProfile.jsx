import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./userProfile.css";
import { postUser } from "../../redux/actions/index";

const UserProfile = () => {
  // Dispatch para enviar acciones de Redux
  const dispatch = useDispatch();

  // Estado local para almacenar los datos del formulario
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Estado local para almacenar los mensajes de error de validación
  const [errors, setErrors] = useState({
    name: "Nombre requerido",
    surname: "Apellido requerido",
    email: "Email requerido",
    phone: "",
    password: "Contraseña requerida",
    confirmPassword: "Debe confirmar la contraseña",
  });

  // Función para deshabilitar el botón de envío si hay errores en el formulario
  const disable = () => {
    for (let error in errors) {
      if (errors[error] !== "") return true;
    }
    return false;
  };

  // Función para validar el campo de teléfono
  // const validatePhone = (input) => {
  //   const phoneRegex = /^\d{10}$/;
  //   return input.phone
  //     ? phoneRegex.test(input.phone)
  //       ? ""
  //       : "Teléfono debe tener 10 dígitos numéricos"
  //     : "";
  // };

  // Función para validar el campo de contraseña
  const validatePassword = (input) => {
    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    const isValidLength = /^.{10,16}$/;

    let errorMessage = "";

    if (!isNonWhiteSpace.test(input.password)) {
      errorMessage += "La contraseña no debe contener espacios en blanco. ";
    }

    if (!isContainsUppercase.test(input.password)) {
      errorMessage += "La contraseña debe contener al menos una letra mayúscula. ";
    }

    if (!isContainsLowercase.test(input.password)) {
      errorMessage += "La contraseña debe contener al menos una letra minúscula. ";
    }

    if (!isContainsNumber.test(input.password)) {
      errorMessage += "La contraseña debe contener al menos un número. ";
    }

    if (!isContainsSymbol.test(input.password)) {
      errorMessage += "La contraseña debe contener al menos un símbolo especial. ";
    }

    if (!isValidLength.test(input.password)) {
      errorMessage += "La contraseña debe tener entre 10 y 16 caracteres. ";
    }

    return errorMessage ? errorMessage : "";
  };

  // Función para validar el campo de confirmación de contraseña
  const validateConfirmPassword = (input) => {
    return input.confirmPassword === state.password
      ? ""
      : "Las contraseñas no coinciden";
  };

  // Función para validar un campo específico del formulario
  const validateField = (input, name) => {
    const updatedErrors = { ...errors };

    switch (name) {
      case "name":
        updatedErrors.name = input.name ? "" : "Nombre requerido";
        break;
      case "surname":
        updatedErrors.surname = input.surname ? "" : "Apellido requerido";
        break;
      case "email":
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        updatedErrors.email = input.email
          ? emailRegex.test(input.email)
            ? ""
            : "Email tiene un formato erroneo"
          : "Email requerido";
        break;
      case "phone":
        updatedErrors.phone = validatePhone(input);
        break;
      case "password":
        updatedErrors.password = validatePassword(input);
        break;
      case "confirmPassword":
        updatedErrors.confirmPassword = validateConfirmPassword(input);
        break;
      default:
        break;
    }

    setErrors(updatedErrors);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Comprobamos si hay errores antes de enviar el formulario
    if (!disable()) {
      dispatch(postUser(state));
    }
  };

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField({ ...state, [name]: value }, name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
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
        <div>
          <label>Contraseña</label>
          <input type="password" name="password" onChange={handleChange} />
          {errors.password}
        </div>
        {/* Campo de confirmación de contraseña */}
        <div>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
          {errors.confirmPassword}
        </div>
        {/* Botón de envío */}
        <button disabled={disable()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
