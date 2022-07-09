import portada from "../../Resources/Images/portada.png"
import { HomeProductGrid } from "../../Components/ProductGrid";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img className="h-1/4 w-5/6" src={portada} alt="portada"/>
      </div>
      <HomeProductGrid homePizzaUrl='http://localhost:7500/homePizzas/' homeComboUrl='http://localhost:7500/homeCombos/' />
    </div>
  )
}