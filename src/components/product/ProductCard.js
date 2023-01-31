// import img from '../../assets/milkshake_bg.jpg'
import { useEffect, useState } from 'react';
import { Counter } from '../product-options/Counter'
import { OptionCard } from '../product-options/OptionCard'
import './ProductCard.css'


export const ProductCard = ({props}) => {
    const {name, img, price} = props;

    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState("L");
    const [sugar, setSugar] = useState("30%");
    const [ice, setIce] = useState("30%");                                                                                                                                

    const onClick = () => {
        console.log({name, price, amount, size, sugar, ice})

        setAmount(1);
        setSize("30%");
        setSugar("30%");
        setIce("30%");
    }


    return(
        <div className="product-card-grid">
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <h4 className="product-price">$ {price}</h4>
            </div>
            <div className="product-img-container">
                <img src={img}/>
            </div>
            <div className="product-options-container">
                <Counter amount={amount} setAmount={setAmount}/>
                <OptionCard value={["L", "M", "S"]} text={"Size"} prop={size} setProp={setSize}/>
                <OptionCard value={["30%", "50%", "70%"]} text={"Sugar"} prop={sugar} setProp={setSugar}/>
                <OptionCard value={["30%", "50%", "70%"]} text={"Ice"} prop={ice} setProp={setIce}/>
            </div>
            <button className="add-cart-btn" onClick={onClick}>Add To Card</button>
        </div>

    )
}