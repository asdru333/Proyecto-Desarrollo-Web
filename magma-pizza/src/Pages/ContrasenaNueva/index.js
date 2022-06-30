import { FormInput } from "../../Components/FormItems";
import { FormBtn } from "../../Components/Buttons";

export default function ContrasenaNueva() {
    return (
        <div>
            <div className = "flex justify-center h-100">
                <form className="bg-red w-4/12 h-4/5 mt-6 py-8 rounded-md flex flex-col items-center">
                    <h1 className="text-3xl text-white">Ingresa tu nueva contraseña</h1>
                    <div className='flex flex-col items-center w-3/4 py-8'>
                        <FormInput name='password' type='password' />
                        <FormBtn text='Cambiar contraseña'/>
                    </div>
                </form>
            </div>
        </div>
    );
}