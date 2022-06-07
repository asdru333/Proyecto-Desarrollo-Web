import { FormInput } from "../../Components/FormItems";
import { FormBtn } from "../../Components/Buttons";

export default function CrearCuenta() {
    return (
        <div>
            <div class = "flex justify-center h-screen">
                <form class="bg-red w-96 h-4/5 mt-6 py-8 rounded-md flex flex-col items-center">
                    <h1 class = "text-4xl text-white">Crea tu cuenta</h1>
                    <div class='flex flex-col items-center w-3/4 py-6'>
                        <FormInput label='Correo electrónico' name='email' type='email' placeholder='abc@gmail.com' />
                        <FormInput label='Contraseña' name='password' type='password' />
                        <FormInput label='Confirmar contraseña' name='confirmPass' type='password' />
                        <FormBtn text='Crear Cuenta'/>
                    </div>
                </form>
            </div>
        </div>
    );
}