import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Postres() {
    return (
        <div>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}