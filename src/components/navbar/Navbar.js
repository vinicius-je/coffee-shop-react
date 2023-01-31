import coffeeBg from '../../assets/coffee_bg.jpg'
import teaBg from '../../assets/tea_bg.jpg'
import milkshakeBg from '../../assets/milkshake_bg.jpg'
import './style.css'
import { NavbarButton } from './NavbarButton'

export const Navbar = () => {
    return(
        <div className="navbar-container">
            <h4 className="nav-subtitle">Drinks</h4>
            <NavbarButton text={"Coffee"} img={coffeeBg}/>
            <NavbarButton text={"Tea"} img={teaBg}/>
            <NavbarButton text={"Milkshake"} img={milkshakeBg}/>
        </div>
    )
}
