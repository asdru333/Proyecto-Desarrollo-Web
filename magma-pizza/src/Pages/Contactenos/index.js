import React from "react";
import SimpleMap from "../../Components/Map/map";

export default function Contactenos() {
    return (
      <div className="row-4">
        <div className="mt-14 mx-44">
          <h2 className="text-pizza text-3xl">Ubicación:</h2>
          <br/>
          <p className="text-xl">Nos ubicamos en la Ciudad de la Investigación de la UCR, San Pedro de Montes de Oca. Del supermercado Muñoz y Nanne 400 metros Norte (entrada principal 
            a la Ciudad de la Investigación)</p>
          <br />
        </div>
        <div className="flex justify-center">
          <SimpleMap/>
        </div>
        <div className="text-center mt-16 md-10 mx-44 gap-12">  
          <h2 className="text-pizza text-3xl">Horario:</h2>
          <p className="text-xl">
            <strong>Lunes a sabado:</strong> 22446913<br />
            <strong>Domingo:</strong> (506)70462055
          </p>  
        </div>  
        <div className="text-center mt-16 md-10 mx-44 gap-12">
          <h2 className="text-pizza text-3xl">Números telefónicos</h2>
          <p className="text-xl">
            <strong>Telefono:</strong> 22446913<br />
            <strong>Whatsapp:</strong> (506)70462055
          </p>  
        </div>  
        <br/>
        <div className="flex justify-center my-20">
          <h2 className="text-pizza text-3xl">Redes sociales:</h2>
        </div>
      </div>  
    )
}