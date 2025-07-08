import "../../reset.css";
import CartItemCard from "../cart-item-card/CartItemCard";
import "./cart.css";

export default function Cart({ plants }) {
    return (
        <ul className="cart">
            {Array.from(plants, (plant) => (
                <CartItemCard
                    key={plant.id /** Is this id what I want? */}
                    plant={plant}
                />
            ))}
            ;
        </ul>
    );
}
