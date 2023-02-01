import coffeeBg from '../../assets/coffee_bg.jpg'
import teaBg from '../../assets/tea_bg.jpg'
import milkshakeBg from '../../assets/milkshake_bg.jpg'
import cupcakeBg from '../../assets/cupcakes_bg.jpg'
import croissantBg from '../../assets/croissant_bg.jpg'
import './style.css'
import { NavbarButton } from './NavbarButton'

export const Navbar = () => {
    return(
        <div className="navbar-container">
            <h4 className="nav-subtitle">Drink</h4>
            <NavbarButton text={"Coffee"} img={coffeeBg}/>
            <NavbarButton text={"Tea"} img={teaBg}/>
            <NavbarButton text={"Milkshake"} img={milkshakeBg}/>
            <h4 className="nav-subtitle">Food</h4>
            <NavbarButton text={"Cupcake"} img={cupcakeBg}/>
            <NavbarButton text={"Croissant"} img={croissantBg}/>
        </div>
    )
}
