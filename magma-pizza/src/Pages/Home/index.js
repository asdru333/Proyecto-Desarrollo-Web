import { HomeProductGrid } from "../../Components/ProductGrid";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img className="h-1/4 w-5/6" src='https://ci0137.s3.amazonaws.com/magma/home/portada.png' alt="portada"/>
      </div>
      <HomeProductGrid homePizzaUrl='http://localhost:7500/homePizzas/' homeComboUrl='http://localhost:7500/homeCombos/' />
    </div>
  )
}