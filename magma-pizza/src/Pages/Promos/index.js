import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Promos() {
    return (
        <div>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid url='http://localhost:7500/combos/'/>
            </div>
        </div>
    );
}