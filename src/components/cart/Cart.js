import './style.css'

export const Cart = () => {
    return(
        <aside className="cart-container">
            <div className="cart-header">
                <h3>Bill</h3>
                <h3>Today</h3>
            </div>
            <div className="order-info">
                <div className="order-info-header">
                    <h3>Milk Tea</h3>
                    <h3>$6.99</h3>
                </div>
                <p>amount</p>
                <p>amount</p>
                <p>amount</p>
                <p>amount</p>
            </div>
            <div className="cart-total">
                <h3>Total</h3>
                <h3>$0.00</h3>
            </div>

            <button className="cart-btn">Pay By Card</button>
            <button className="cart-btn">Pay By Cash</button>
        </aside>
    )
}