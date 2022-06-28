import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postLogin } from "../../Slices/users/requests/postLogin";

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
      <div className="flex justify-center h-100 bg-red w-96 h-4/5 mt-6 py-8 rounded-md flex-col items-center m-auto">
        <h1 className = "text-4xl text-white">Ingresa a tu cuenta</h1>
        <div className='flex flex-col items-center w-3/4 py-6'>
          <input
            label='Correo electrónico' name='email' type='email' placeholder='abc@mail.com' 
            className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
              focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={username}
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
          <input
            label='Contraseña' name='password' type='password'
            className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
              focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
          <p className="text-white mb-1 hover:underline">¿Olvidó su contraseña?</p>
          <Link to="/CrearCuenta" className="text-white mb-6 hover:underline">¿No tiene cuenta? Regístrese</Link>
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