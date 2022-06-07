import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Acompanamientos() {
    return (
        <div>
            <h1 class = "text-3xl">Acompañamientos</h1>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}

  