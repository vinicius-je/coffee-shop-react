import img from '../../assets/milkshake_bg.jpg'
import { Counter } from './Counter'
import { OptionCard } from './OptionCard'
import './ProductCard.css'

export const ProductCard = () => {
    return(
        <div className="product-card-grid">
            <div className="product-info">
                <h3 className="product-name">Milk Tea</h3>
                <h3 className="product-price">$ 6.99</h3>
            </div>
            <div className="product-img-container">
                <img src={img}/>
            </div>
            <div className="options-container">
                <Counter/>
                <OptionCard/>
            </div>
            <button className="add-btn">buy</button>
        </div>
    )
}