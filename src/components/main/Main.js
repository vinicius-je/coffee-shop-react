import { ProductCard } from "../product/ProductCard"
import { useContext, useEffect, useState } from "react"
import { appContext } from "../../App";

export const Main = () => {
    const {product} = useContext(appContext);

    return(
        <div className="main-container">
            {product.length != 0 ? product.map((item, index) => (
                <ProductCard props={item} key={index}/>
            )) : 
            <h4 style={{marginTop: '20px'}}>No products found</h4>}
        </div>
    )
}