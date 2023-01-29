import { useState } from "react"

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
            <button className="btn-minus" onClick={minus}>menos</button>
            <div className="counter-amount">{amount}</div>
            <button className="btn-plus" onClick={plus}>mais</button>
        </div>
    )
}