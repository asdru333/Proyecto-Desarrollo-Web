import { FormInput } from "../../Components/FormItems";
import { FormBtn } from "../../Components/Buttons";

export default function RecuperarContrasena() {
    return (
        <div>
            <div className = "flex justify-center h-100">
                <form className="bg-red w-4/12 h-4/5 mt-6 py-8 rounded-md flex flex-col items-center">
                    <h1 className="text-3xl text-white">Recupera tu contraseña</h1>
                    <div className='flex flex-col items-center w-3/4 py-8'>
                        <div><p className="mb-4 text-white text-lg">Ingresa el correo electrónico asociado a tu cuenta, te llegará un código de recuperación</p></div>
                        <FormInput  name='email' type='email' placeholder='abc@mail.com' />
                        <FormBtn text='Enviar código'/>
                    </div>
                </form>
            </div>
        </div>
    );
}