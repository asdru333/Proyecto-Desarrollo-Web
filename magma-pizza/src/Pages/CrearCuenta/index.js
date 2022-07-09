import { FormBtn } from "../../Components/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postCreateUser } from "../../Slices/users/requests/postCreateUser";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginInput } from "../../Components/CustomInput";

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
                      <LoginInput name={'name'} type={'text'} placeholder={''} value={name} func={(evt) => {setUsername(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Correo electrónico
                      <LoginInput name={'email'} type={'email'} placeholder={'abc@mail.com'} value={email} func={(evt) => {setEmail(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Contraseña
                      <LoginInput name={'password'} type={'password'} placeholder={''} value={password} func={(evt) => {setPassword(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Repita su contraseña
                      <LoginInput name={'confirm-password'} type={'password'} placeholder={''} value={passwordConfirmation} func={(evt) => {setPasswordConfirmation(evt.target.value);}}/>
                    </label>
                    <FormBtn text={'Crear cuenta'} func={() => {
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
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}