import ProductGrid from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Acompanamientos() {
    return (
        <div>
            <div className="py-6 mt-5 flex bg-snow">
                <SideMenu />
                <ProductGrid />
            </div>
        </div>
    );
}