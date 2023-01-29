import { Inline } from '../inline-info/Inline'
import { InlineBold } from '../inline-info/InlineBold'
import './style.css'

export const OrderInfo = () => {
    return(
        <div className="order-info-container">
            <InlineBold info1={'Milkshake'} info2={'$6.99'}/>
            <Inline info1={'Bill'} info2={1}/>
            <Inline info1={'Bill'} info2={'L'}/>
            <Inline info1={'Bill'} info2={'30%'}/>
            <Inline info1={'Bill'} info2={'50%'}/>
        </div>
    )
}