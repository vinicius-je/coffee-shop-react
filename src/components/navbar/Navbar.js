import coffeeBg from '../../assets/coffee_bg.jpg'
import './style.css'

export const Navbar = () => {
    return(
        <div className="navbar-container">
            <h3 className="nav-subtitle">Drink</h3>
                <div className="options-container">
                    <div className="option-box">
                        <div className="black-mask"></div>
                        <img src={coffeeBg}/>
                        <p className="option-text">Coffee</p>
                    </div>
                </div>

                <div className="options-container">
                    <div className="option-box">
                        <div className="black-mask"></div>
                        <img src={coffeeBg}/>
                        <p className="option-text">Coffee</p>
                    </div>
                </div>

                <div className="options-container">
                    <div className="option-box">
                        <div className="black-mask"></div>
                        <img src={coffeeBg}/>
                        <p className="option-text">Coffee</p>
                    </div>
                </div>
        </div>
    )
}
