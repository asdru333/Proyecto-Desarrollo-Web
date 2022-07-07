import SideMenu from "../../Components/SideMenu";
import {ProductGridPizza} from "../../Components/ProductGrid";

export default function Pizzas() {
    return (
        <div className="py-6 mt-5 flex">
            <SideMenu />
            <ProductGridPizza url='http://localhost:7500/pizzas/'/>
        </div>
    )
}