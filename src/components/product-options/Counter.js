import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CricleButton } from './CircleButton';
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
            <CricleButton value={<FaMinus className="counter-btn"/>} onClick={minus}/>
            <div className="counter-amount">{amount}</div>
            <CricleButton value={<FaPlus className="counter-btn"/>} onClick={plus}/>
        </div>
    )
}