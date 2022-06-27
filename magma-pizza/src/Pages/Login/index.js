import { FormInput } from "../../Components/FormItems";
import { FormBtn } from "../../Components/Buttons";
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

  return (
    <div>
      <div className="flex justify-center h-100">
        <form className="bg-red w-96 h-4/5 mt-6 py-8 rounded-md flex flex-col items-center">
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
            <FormBtn 
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
              text='Ingresar' 
            />
          </div>
        </form>
      </div>
    </div>
  );
}