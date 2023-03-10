import { useContext, useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { appContext } from '../../App'
import products from '../../data/products'
import './style.css'

export const Header = () => {
    const {product, setProduct, currentSession, cart, setCart} = useContext(appContext);
    const [inputValue, setInputValue] = useState("");

    // Reset products according to current session
    useEffect(() => {
        if(inputValue == "" && product.length == 0)
            setProduct(products.filter(item => item.category.includes(currentSession)));
    }, [inputValue])

    const onChange = (e) => {
        setProduct(products.filter(item => item.category.includes(currentSession) && item.name.includes(e.target.value)));
        e.target.value.length != 0 ? setInputValue(e.target.value) : setInputValue("")
    }

    return(
        <header>
            <h1 className="header-title">Coffee Shop</h1> 
            <div className="search-container">     
                <FaSearch className="search-icon"/>
                <input type="text" className="search-input" value={inputValue} onChange={onChange}></input>
            </div>
            <div className="hamburger-menu" onClick={() => setCart(!cart)}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
        </header>
    )
}