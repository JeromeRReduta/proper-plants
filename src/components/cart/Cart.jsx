import "../../reset.css";
import CartItemCard from "../cart-item-card/CartItemCard";
import "./cart.css";

export default function Cart({ plants, addOne, removeOne }) {
    return (
        <div className="cart">
            <h1>Cart</h1>
            <ul className="item-list">
                {plants
                    .filter((plant) => plant.quantity > 0)
                    .map((plant) => (
                        <CartItemCard
                            key={plant.id}
                            plants={plants}
                            plant={plant}
                            addOne={addOne}
                            removeOne={removeOne}
                        />
                    ))}
            </ul>
        </div>
    );
}
