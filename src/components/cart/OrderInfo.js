import { useContext } from 'react';
import { appContext } from '../../App';
import { Inline } from '../inline-info/Inline'
import { InlineBold } from '../inline-info/InlineBold'
import './style.css'

export const OrderInfo = ({props}) => {
    const {id, name, price, amount, size, sugar, ice} = props;

    const {order, setOrder} = useContext(appContext);

    const removeOrder = (e) => {
        // Remove order on double click
        if(e.detail == 2) setOrder(order.filter(item => item.id != id))
    }
    
    return(
        <div className="order-info-container" onClick={removeOrder}>
            <InlineBold info1={name} info2={`$${price}`}/>
            <Inline info1={'Amount'} info2={amount}/>
            <Inline info1={'Size'} info2={size}/>
            <Inline info1={'Sugar'} info2={sugar}/>
            <Inline info1={'Ice'} info2={ice}/>
        </div>
    )
}
