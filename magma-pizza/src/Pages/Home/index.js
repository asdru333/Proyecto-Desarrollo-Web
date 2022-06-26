import portada from "../../Resources/Images/portada.png"

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img className="h-1/2 w-1/2" src={portada} alt="portada"/>
      </div>
      <div className="text-center text-pizza text-3xl cel:text-lg my-10">
        Disfrute de nuestras pizzas innovadoras
      </div>
      <div className="text-center text-pizza text-3xl cel:text-lg my-10">
        Tambien puede disfrutar de las clásicas
      </div>
      <div className="text-center text-pizza text-3xl cel:text-lg my-10">
        Si no puede decidir ¡Dale un vistazo a nuestros combos!
      </div>
    </div>
  )
}