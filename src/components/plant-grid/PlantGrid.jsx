import "./plant-grid.css";
import "../../reset.css";
import PLANTS from "../../data";
import PlantCard from "../plant-card/PlantCard";

export default function PlantGrid() {
  return (
    <div className="plant-grid">
      {Array.from(PLANTS, (plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
