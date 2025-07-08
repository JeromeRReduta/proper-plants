import "../../reset.css";
import "./plant-card.css";

export default function PlantCard({ plants, plant, addOne }) {
    /** To do: add functional add to cart button */
    return (
        <div className="plant-card">
            <div className="plant-img">{plant.image}</div>
            {/* Oh yeah it's just an emoji */}
            <h3 className="plant-name">{plant.name}</h3>
            <input
                className="add-to-cart"
                type="submit"
                value="Add To Cart"
                onClick={() => addOne(plants, plant.id)}
            />
        </div>
    );
}
