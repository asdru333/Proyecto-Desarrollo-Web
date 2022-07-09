import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postRecoverPass } from "../../Slices/users/requests/postRecoverPass";
import { LoginInput } from "../../Components/CustomInput";
import { FormBtn } from "../../Components/Buttons";

export default function RecuperarContrasena() {
  const [email, setEmail] = useState("");
  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userIsRecoveringPass = useSelector((state) => state.user.userIsRecoveringPass);
  const dispatch = useDispatch();
  return userIsRecoveringPass ? (
    <Navigate to="/" />
  ) : (
    <div>
      <div className="flex flex-col justify-center items-center h-100 bg-red w-4/12 h-4/5 m-auto mt-6 py-8 rounded-md">
        <h1 className="text-3xl text-white">Recupera tu contraseña</h1>
        <div className="flex flex-col items-center w-3/4 py-8">
          <div>
            <p className="mb-4 text-white text-lg">
              Ingresa el correo electrónico asociado a tu cuenta, te llegará un
              código de recuperación
            </p>
          </div>
          <LoginInput name={'email'} type={'email'} placeholder={'abc@mail.com'} value={email} func={(evt) => {setEmail(evt.target.value);}}/>
          <FormBtn text={'Enviar código'} func= {() => {
              if (email) {
                setLocalErrorMessage("");
                dispatch(
                  postRecoverPass({
                    email
                  })
                );
              } else {
                setLocalErrorMessage("Debe indicar su correo");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
