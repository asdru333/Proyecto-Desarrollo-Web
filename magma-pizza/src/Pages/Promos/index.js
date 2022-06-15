import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Promos() {
    return (
        <div>
            <h1 class = "text-3xl text-pizza mx-40 my-10">Combos y Promociones</h1>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}