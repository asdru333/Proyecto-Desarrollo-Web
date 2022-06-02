import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Acompanamientos() {
    return (
        <div>
            <p class = "text-3xl">Acompañamientos</p>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}

  