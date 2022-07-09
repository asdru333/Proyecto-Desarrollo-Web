import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postLogin } from "../../Slices/users/requests/postLogin";
import { LoginInput } from "../../Components/CustomInput";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();

  /*
  Datos de prueba
  correo: rodrigo.piedra@ucr.ac.cr
  contraseña: abcdefg11
  */

  return (
    <div>
      <div className="flex justify-center h-100 bg-red w-96 tiny:w-3/4 h-4/5 mt-6 py-8 rounded-md flex-col items-center m-auto">
        <h1 className = "text-4xl tiny:text-center tiny:text-3xl text-white">Ingresa a tu cuenta</h1>
        <div className='flex flex-col items-center w-3/4 py-6'>
          <label className = "text-lg text-white">
            Correo electrónico
            <LoginInput name={"email"} type={"email"} placeholder={"abc@mail.com"} value={username} func={(evt) => {setUsername(evt.target.value);}}/>
          </label>
          <label className = "text-lg text-white">
            Contraseña
            <LoginInput name="password" type="password" placeholder={""} value={password} func={(evt) => {setPassword(evt.target.value);}}/>
          </label>
          <Link to="/RecuperarContrasena" className="text-white mb-1 hover:underline">¿Olvidó su contraseña?</Link>
          <Link to="/CrearCuenta" className="text-white mb-1 hover:underline">¿No tiene cuenta? Regístrese</Link>
        </div>
        <button className="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md"
          onClick={() => {
            if (username && password) {
              if (password.length < 8) {
                setLocalErrorMessage("La contraseña debe contener al menos 8 dígitos.");                
              } else {
                setLocalErrorMessage("");
                dispatch(
                  postLogin({
                    username,
                    password,
                  })
                );
              }
            } else {
              setLocalErrorMessage("Debe completar todos los campos");
            }
          }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}