import "./plant-grid.css";
import "../../reset.css";
import PlantCard from "../plant-card/PlantCard";

export default function PlantGrid({ plants, addOne }) {
    return (
        <div className="plant-grid">
            {Array.from(plants, (plant) => (
                <PlantCard
                    key={plant.id}
                    plants={plants}
                    plant={plant}
                    addOne={addOne}
                />
            ))}
        </div>
    );
}
