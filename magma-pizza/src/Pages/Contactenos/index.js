import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default function Contactenos() {
    const Map = ReactMapboxGl({
      accessToken:
        "pk.eyJ1IjoiYXozMzMiLCJhIjoiY2w0NmFpbHFxMDZrdTNqbWlpenl2ZnkxcCJ9.aukLD2fPOUS2vieY9zEE_w"
    });
    return (
      <div>
      <h2><strong>Números telefónicos</strong></h2>
      <p><strong>Telefono:</strong> 22446913<br />
        <strong>Whatsapp:</strong> (506)70462055
      </p>  

      <br/>

      <h2><strong>Ubicación</strong></h2>
      <p>Nos ubicamos en la Ciudad de la Investigación de la UCR, San Pedro de Montes de Oca. Del supermercado Muñoz y Nanne 400 metros Norte (entrada principal 
        a la Ciudad de la Investigación)</p>
      <br />
      
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        zoom={[18]}
        center={[-84.04443, 9.9410820]}
        containerStyle={{
          height: "60vh",
          width: "100vw"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-84.04443, 9.9410820]} />
        </Layer>
      </Map>
      </div>  
    )
}