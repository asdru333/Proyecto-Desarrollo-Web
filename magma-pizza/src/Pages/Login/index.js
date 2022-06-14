import { FormInput } from "../../Components/FormItems";
import { FormBtn } from "../../Components/Buttons";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div>
            <div className="flex justify-center h-100">
                <form className="bg-red w-96 h-4/5 mt-6 py-8 rounded-md flex flex-col items-center">
                    <h1 className = "text-4xl text-white">Ingresa a tu cuenta</h1>
                    <div className='flex flex-col items-center w-3/4 py-6'>
                        <FormInput label='Correo electrónico' name='email' type='email' placeholder='abc@mail.com' />
                        <FormInput label='Contraseña' name='password' type='password' />
                        <p className="text-white mb-1 hover:underline">¿Olvidó su contaseña?</p>
                        <Link to="/CrearCuenta" className="text-white mb-6 hover:underline">¿No tiene cuenta? Regístrese</Link>
                        <FormBtn text='Ingresar'/>
                    </div>
                </form>
            </div>
        </div>
    );
}