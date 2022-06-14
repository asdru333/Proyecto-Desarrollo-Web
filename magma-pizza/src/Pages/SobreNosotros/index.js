import img1 from "../../Resources/Images/pizza_giratoria.png"
import img2 from "../../Resources/Images/chef_group_smiling.png"
import img3 from "../../Resources/Images/chef_taking_notes.png"

export default function SobreNosotros() {
  return (
    <>
      <div className="row-3">
        <div className="columns-2 flex md:flex-none ms:flex-none justify-around mt-14 mx-44 gap-12">
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">&iquest;Quienes somos?</h2>
            <br/>
            <p className="text-xl">Magma Pizza es una franquicia nacional con 100% talento costarricense. Nuestro objetivo es unir a la familia y a los amigos con nuestras 
            deliciosas pizzas. Ese es nuestro secreto: un lugar donde puedas pasar tus momentos especiales junto con nuestras pizzas llenas de sabor.<br/>  
            Con tan solo unos pocos años en el mercado, hemos logrado ser parte de la historia de muchas familias costarricenses, acompañándolos día a día, ya sea en el desayuno,
            almuerzo o cena. Siempre estaremos ahí cuando nos necesites.<br/><br/>
            ¡Lo que sea por tu pizza favorita!
             </p>
          </div>
          <div className="flex-none">
            <img className="h-full w-full" src={img1} alt="Logo Swap it"/>
          </div>
        </div>

        <br />
        
        <div className="columns-2 flex justify-around my-8 mx-44 gap-12">
          <div className="flex-none">
            <img className="h-full w-full" src={img2} alt="Logo Swap it"/>
          </div>
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">Nuestros valores</h2>
            <br/>
            <p className="text-xl">
              <strong>Respeto:</strong> El respeto por el cliente nos permite generar un clima comodo y agradable, fundamental para que puedas disfrutar de tus alimentos. 
              Igualmente es muy importante el respeto entre los empleados para que asi puedas disfrutar de la mejor pizza de Costa Rica.
              <br/><br/>
              <strong>Calidad:</strong> La obtenemos utilizando los mejores ingredientes, somos muy exigentes con nosotros mismos. 
              Incorporar calidad a cada uno de nuestros alimentos es nuestra prioridad.
              <br/><br/>
              <strong>Compromiso:</strong> Es importante que cada uno de los miembros de nuestro equipo de trabajo asuma el compromiso necesario para alcanzar nuestro 
              principal objetivo: hacerte disfrutar de la mejor pizza
            </p>
          </div>
        </div>
        
        <br />
        
        <div className="columns-2 flex justify-around mb-10 mx-44 gap-12">
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">Servicio al cliente</h2>
            <br/>
            <p className="text-xl">
              Ya sea que estes dentro de nuestro local o desde tu casa, o bien ya sea en el día o en la noche, siempre estaremos listos para servirte. 
              Nuestra misión es:
              <br/><br/>
              Ofrecerte productos de la mejor calidad.
              <br/><br/>
              Ofrecerte una calida sonrisa.
              <br/><br/>
              Ofrecerte productos de la mejor calidad.
              <br/><br/>
              ¡Tu alegría es nuestra prioridad #1!
            </p>
          </div>
          <div className="flex-none">
            <img className="h-full w-full" src={img3} alt="Logo Swap it"/>
          </div>
        </div>
      </div> 
    </> 
  )
}