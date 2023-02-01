import { useContext, useEffect, useState } from 'react'
import { FaClosedCaptioning, FaCocktail, FaIoxhost, FaQuinscape, FaSignOutAlt, FaVectorSquare } from 'react-icons/fa'
import { appContext } from '../../App'
import { InlineBold } from '../inline-info/InlineBold'
import { Button } from './Button'
import { OrderInfo } from './OrderInfo'
import './style.css'
import { FiX } from "react-icons/fi";

export const Cart = () => {
    const {order, cart, setCart} = useContext(appContext);

    const [bill, setBill] = useState(0);
    const [btn, setBtn] = useState("Pay By Card");

    const totalValue = () => {
        return order.reduce((acc, item) => acc += item.price * item.amount, 0);
    }

    useEffect(() => {
        setBill(totalValue());
    }, [order])


    return(
        <aside className={cart ? "cart-container cart-open" : "cart-container cart-close"}>
            <InlineBold info1={"Bill"} info2={"Today"}/>
            <div className="cart-info-wrapper">
                {order.map((item, index) => (
                    <OrderInfo props={item} key={index}/>
                ))}
            </div>
            <InlineBold info1={"Total"} info2={bill}/>
            <Button value={"Pay By Card"} btn={btn} setBtn={setBtn}/>
            <Button value={"Pay By Cash"} btn={btn} setBtn={setBtn}/>
            <div className="close-cart" onClick={() => setCart(!cart)}>x</div>
        </aside>
    )
}