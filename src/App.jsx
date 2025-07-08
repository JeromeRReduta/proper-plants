import { useState } from "react";
import Cart from "./components/cart/Cart";
import PlantGrid from "./components/plant-grid/PlantGrid";
import PLANTS from "./data";
import createPlant from "./domain-data/plant";

function generatePlants() {
    return Array.from(PLANTS, (plant) =>
        createPlant({
            name: plant.name,
            id: plant.id,
            image: plant.image,
            quantity: 0,
        })
    );
}

export default function App() {
    const [data, setData] = useState(generatePlants());
    const add = (plants, id, num) =>
        setData(
            plants.map((plant) => {
                if (plant.id === id) {
                    plant.quantity += num;
                }
                return plant;
            })
        );
    const addOne = (plants, id) => add(plants, id, 1);
    const removeOne = (plants, id) => add(plants, id, -1);
    return (
        <>
            <h1 className="title">Proper Plants</h1>
            <PlantGrid plants={data} addOne={addOne} />
            <Cart
                plants={data}
                setData={setData}
                addOne={addOne}
                removeOne={removeOne}
            />
        </>
    );
}
