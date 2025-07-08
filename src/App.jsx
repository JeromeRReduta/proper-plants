import CartItemCard from "./components/cart-item-card/CartItemCard";
import PlantGrid from "./components/plant-grid/PlantGrid";
import PLANTS from "./data";

export default function App() {
    return (
        <>
            <h1 className="title">Proper Plants</h1>
            <PlantGrid />
            <CartItemCard plant={PLANTS[0]} quantity={4} />
            <CartItemCard plant={PLANTS[1]} quantity={5} />
            <CartItemCard plant={PLANTS[PLANTS.length - 1]} quantity={200} />
        </>
    );
}
