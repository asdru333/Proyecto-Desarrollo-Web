import { ReceivedBtn } from "../../Components/Buttons";

export default function Login() {
    return (
        <>
            <div className= "flex flex-col items-center">
                <h1 className= "text-4xl py-10" ><b>¡Hemos recibido tu orden!</b></h1>
                <h2 className= "text-3xl py-5">Tu orden fue procesada y estará lista pronto</h2>
                <div className= "flex flex-row items-center">
                    <div className= "m-10">
                        <ReceivedBtn text='Ver detalles'/> 
                    </div>
                    <div className= "flex flex-row items-center">
                        <ReceivedBtn text='Volver a inicio'/>
                    </div>
                </div>
            </div>
        </>
    );
}