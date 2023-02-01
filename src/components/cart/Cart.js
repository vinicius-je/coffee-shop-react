import { useContext, useEffect, useState } from 'react'
import { appContext } from '../../App'
import { InlineBold } from '../inline-info/InlineBold'
import { Button } from './Button'
import { OrderInfo } from './OrderInfo'
import './style.css'

export const Cart = () => {
    const {order} = useContext(appContext);

    const [bill, setBill] = useState(0);
    const [btn, setBtn] = useState("Pay By Card");

    const totalValue = () => {
        return order.reduce((acc, item) => acc += item.price * item.amount, 0);
    }

    useEffect(() => {
        setBill(totalValue());
    }, [order])


    return(
        <aside className="cart-container">
            <InlineBold info1={"Bill"} info2={"Today"}/>
            <div className="cart-info-wrapper">
                {order.map((item, index) => (
                    <OrderInfo props={item} key={index}/>
                ))}
            </div>
            <InlineBold info1={"Total"} info2={bill}/>
            <Button value={"Pay By Card"} btn={btn} setBtn={setBtn}/>
            <Button value={"Pay By Cash"} btn={btn} setBtn={setBtn}/>
        </aside>
    )
}