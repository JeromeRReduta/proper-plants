import CartItemCard from "./components/cart-item-card/CartItemCard";
import PlantGrid from "./components/plant-grid/PlantGrid";
import PLANTS from "./data";
import createPlant from "./domain-data/plant";

export default function App() {
    const data = Array.from(PLANTS, (plant) =>
        createPlant({
            name: plant.name,
            id: plant.id,
            image: plant.image,
            quantity: 0,
        })
    );

    return (
        <>
            <h1 className="title">Proper Plants</h1>
            <PlantGrid />
            <CartItemCard plant={data[0]} />
            <CartItemCard plant={data[1]} />
            <CartItemCard plant={data[data.length - 1]} />
        </>
    );
}
