import img from '../../assets/milkshake_bg.jpg'
import { Counter } from '../product-options/Counter'
import { OptionCard } from '../product-options/OptionCard'
import './ProductCard.css'

export const ProductCard = () => {
    return(
        <div className="product-card-grid">
            <div className="product-info">
                <h4 className="product-name">Milk Tea</h4>
                <h4 className="product-price">$ 6.99</h4>
            </div>
            <div className="product-img-container">
                <img src={img}/>
            </div>
            <div className="product-options-container">
                <Counter/>
                <OptionCard/>
                <OptionCard/>
                <OptionCard/>
            </div>
            <button className="add-cart-btn">Add To Card</button>
        </div>
    )
}