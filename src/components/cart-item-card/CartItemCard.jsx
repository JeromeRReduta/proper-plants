import "../../reset.css";
import "./cart-item-card.css";

export default function CartItemCard({ plant, quantity }) {
    return (
        <div className="item-display">
            <div className="item-img">{plant.image}</div>
            <div className="item-name">{plant.name}</div>
            <button className="minus">-</button>
            <div className="quantity">{quantity}</div>
            <button className="plus">+</button>
        </div>
    );
}
