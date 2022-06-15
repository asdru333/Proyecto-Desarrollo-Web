import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Acompanamientos() {
    return (
        <div>
            <h1 className="text-3xl text-pizza mx-40 my-10">Acompañamientos</h1>
            <div className="py-6 mt-5 flex">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}