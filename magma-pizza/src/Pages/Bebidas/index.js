import SideMenu from "../../Components/SideMenu";
import ProductGrid from "../../Components/ProductGrid";

export default function Bebidas() {
    return (
        <div className="py-6 mt-5 flex">
            <SideMenu />
            <ProductGrid url='http://localhost:7500/drinks/'/>
        </div>
    )
}