import { useContext } from 'react'
import { appContext } from '../../App'
import products from '../../data/products';
import './style.css'

export const NavbarButton = ({text, img}) => {
    const {setProduct, setCurrentSession} = useContext(appContext);

    const onClick = () => {
        setProduct(products.filter(item => item.category.includes(text.toLowerCase())));
        setCurrentSession(text.toLowerCase());
    }

    return(
        <div className="nav-btn-container">
            <div className="nav-btn-box"
            onClick={onClick}>
                <div className="black-mask"></div>
                <img src={img}/>
                <p className="nav-btn-text">{text}</p>
            </div>
        </div>
    )
}