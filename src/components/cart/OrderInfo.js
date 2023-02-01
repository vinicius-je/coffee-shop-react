import { Inline } from '../inline-info/Inline'
import { InlineBold } from '../inline-info/InlineBold'
import './style.css'

export const OrderInfo = ({props}) => {
    const {name, price, amount, size, sugar, ice} = props;
    
    return(
        <div className="order-info-container">
            <InlineBold info1={name} info2={`$${price}`}/>
            <Inline info1={'Amount'} info2={amount}/>
            <Inline info1={'Size'} info2={size}/>
            <Inline info1={'Sugar'} info2={sugar}/>
            <Inline info1={'Ice'} info2={ice}/>
        </div>
    )
}
