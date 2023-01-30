import { ProductCard } from "../product/ProductCard"
import products from '../../data/products'
import { useEffect } from "react"

export const Main = () => {

    useEffect(() => {
        console.log(products)
    }, [])

    return(
        <div className="main-container">
            {products.map((item, index) => (
                <ProductCard props={item} key={index}/>
            ))}
        </div>
    )
}