import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Postres() {
    return (
        <div>
            <h1 class = "text-3xl text-pizza mx-40 my-10">Postres</h1>
            <div class="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}