import { useContext, useState } from 'react';
import { appContext } from '../../App';
import { Counter } from '../product-options/Counter'
import { OptionCard } from '../product-options/OptionCard'
import './ProductCard.css'


export const ProductCard = ({props}) => {
    const {id, name, img, price} = props;
    const {order, setOrder} = useContext(appContext);

    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState("L");
    const [sugar, setSugar] = useState("30%");
    const [ice, setIce] = useState("30%");                                                                                                                                

    const onClick = () => {
        const index = order.findIndex(item => item.id === id);
    
        if(index !== -1){
            // Update order by id
            let updateOrder = order.map((item) => {
                if(item.id === id){
                    return {...item, amount: item.amount + amount, size, sugar, ice}
                }else{
                    return item
                }
            })
            setOrder(updateOrder);
        }else{
            // Add new order
            setOrder([...order, {id, name, price, amount, size, sugar, ice}]);
        }
        
        // Reset states
        setAmount(1);
        setSize("L");
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