import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './style.css'

export const Counter = () => {
    const [amount, setAmount] = useState(1);

    const plus = () => {
        setAmount(amount + 1);
    }

    const minus = () => {
        if(amount != 1)
            setAmount(amount - 1);
    }


    return(
        <div className="counter-container">
            <p className="option-card-title">text</p>
            <button className="circle btn-minus" onClick={minus}><FaMinus/></button>
            <div className="circle counter-amount">{amount}</div>
            <button className="circle btn-plus" onClick={plus}><FaPlus/></button>
        </div>
    )
}