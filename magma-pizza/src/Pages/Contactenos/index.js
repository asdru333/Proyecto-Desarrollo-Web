import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default function Contactenos() {
    const Map = ReactMapboxGl({
      accessToken:
        "pk.eyJ1IjoiYXozMzMiLCJhIjoiY2w0NmFpbHFxMDZrdTNqbWlpenl2ZnkxcCJ9.aukLD2fPOUS2vieY9zEE_w"
    });
    return (
      <div className="row-4">
        <div className="mt-14 mx-44">
          <h2 className="text-pizza text-3xl"><strong>Ubicación:</strong></h2>
          <br/>
          <p className="text-xl">Nos ubicamos en la Ciudad de la Investigación de la UCR, San Pedro de Montes de Oca. Del supermercado Muñoz y Nanne 400 metros Norte (entrada principal 
            a la Ciudad de la Investigación)</p>
          <br />
        </div>
        <div className="flex justify-center">
          <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={[15]}
            center={[-84.04443, 9.9410820]}
            containerStyle={{
              height: "60vh",
              width: "70vw"
            }}
            >
            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-84.04443, 9.9410820]} />
            </Layer>
          </Map>
        </div>
        <div className="columns-2 flex justify-between mt-16 md-10 mx-44 gap-12">  
          <div>
            <h2 className="text-pizza text-3xl"><strong>Horario</strong></h2>
            <p className="text-xl"><strong>Lunes a sabado:</strong> 22446913<br />
              <strong>Domingo:</strong> (506)70462055
            </p>  
          </div>  
          <div>
            <h2 className="text-pizza text-3xl"><strong>Números telefónicos</strong></h2>
            <p className="text-xl"><strong>Telefono:</strong> 22446913<br />
              <strong>Whatsapp:</strong> (506)70462055
            </p>  
          </div>  
        </div>
        <br/>
        <div className="flex justify-center mb-44">
          <h2 className="text-pizza text-3xl"><strong>Redes sociales:</strong></h2>
        </div>
      </div>  
    )
}