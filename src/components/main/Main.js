import { ProductCard } from "../product/ProductCard"
import { useContext, useEffect, useState } from "react"
import { appContext } from "../../App";

export const Main = () => {
    const {product} = useContext(appContext);

    useEffect(() => {
        console.log(product)
    }, [])

    return(
        <div className="main-container">
            {product.map((item, index) => (
                <ProductCard props={item} key={index}/>
            ))}
        </div>
    )
}