import { FormBtn } from "../../Components/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postCreateUser } from "../../Slices/users/requests/postCreateUser";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CrearCuenta() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
    return (
        <div>
            <div className = "flex justify-center h-100">
                <div className="bg-red w-96 h-4/5 my-6 py-8 rounded-md flex flex-col items-center">
                    <h1 className="text-4xl text-white">Crea tu cuenta</h1>
                    <div className='flex flex-col items-center w-3/4 py-8'>
                    <label className = "text-lg text-white">
                      Nombre
                        <input 
                          name='name' type='text'
                          className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                            focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          value={name}
                          onChange={(evt) => {
                            setUsername(evt.target.value);
                          }}
                        />
                    </label>
                    <label className = "text-lg text-white">
                      Correo electrónico
                        <input 
                          name='email' type='email' placeholder='abc@mail.com' 
                          className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                            focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          value={email}
                          onChange={(evt) => {
                            setEmail(evt.target.value);
                          }}
                        />
                    </label>
                    <label className = "text-lg text-white">
                      Contraseña
                      <input
                        name='password' type='password'
                        className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                          focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        value={password}
                        onChange={(evt) => {
                          setPassword(evt.target.value);
                        }}
                      />
                    </label>
                    <label className = "text-lg text-white">
                      Repita su contraseña
                      <input
                        name='confirm-password' type='password'
                        className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                          focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        value={passwordConfirmation}
                        onChange={(evt) => {
                          setPasswordConfirmation(evt.target.value);
                        }}
                      />
                    </label>
                    <button className="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md"
                      onClick={() => {
                        if (email && password && name) {
                          if (password.length < 8) {
                            setLocalErrorMessage("La contraseña debe contener al menos 8 dígitos.");
                          }
                          if (password !== passwordConfirmation) {
                            setLocalErrorMessage("Los dos campos de contraseña no son iguales.");
                          } else {
                            setLocalErrorMessage("");
                            dispatch(
                              postCreateUser({
                                name,
                                email,
                                password,
                              })
                            );
                          }
                        } else {
                          setLocalErrorMessage("Debe completar todos los campos");
                        }
                      }}
                    >
                      Crear cuenta
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}