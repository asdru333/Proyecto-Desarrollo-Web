import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postRecoverPass } from "../../Slices/users/requests/postRecoverPass";

export default function RecuperarContrasena() {
  const [username, setUsername] = useState("");
  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
    return (
        <div>
            <div className = "flex flex-col justify-center items-center h-100 bg-red w-4/12 h-4/5 m-auto mt-6 py-8 rounded-md">
              <h1 className="text-3xl text-white">Recupera tu contraseña</h1>
              <div className='flex flex-col items-center w-3/4 py-8'>
                <div><p className="mb-4 text-white text-lg">Ingresa el correo electrónico asociado a tu cuenta, te llegará un código de recuperación</p></div>
                <input 
                  name='email' type='email' placeholder='abc@mail.com' 
                  className="mb-6 mt-1 block px-3 py-2 w-64bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                    focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  value={username}
                  onChange={(evt) => {
                    setUsername(evt.target.value);
                  }}
                />
                <button className="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md"
                  onClick={() => {
                    if (username) {
                        setLocalErrorMessage("");
                        dispatch(
                          postRecoverPass({
                            username
                          })
                        );
                    } else {
                      setLocalErrorMessage("Debe indicar su correo");
                    }
                  }}
                >
                  Enviar código
                </button>
              </div>
            </div>
        </div>
    );
}