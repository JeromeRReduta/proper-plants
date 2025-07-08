import "../../reset.css";
import "./cart-item-card.css";

export default function CartItemCard({ plants, plant, addOne, removeOne }) {
    return (
        <div className="item-display">
            <div className="item-img">{plant.image}</div>
            <div className="item-name">{plant.name}</div>
            <button
                className="minus"
                onClick={() => removeOne(plants, plant.id)}
            >
                -
            </button>
            <div className="quantity">{plant.quantity}</div>
            <button className="plus" onClick={() => addOne(plants, plant.id)}>
                +
            </button>
        </div>
    );
}
