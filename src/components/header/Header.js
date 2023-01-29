import {FaSearch} from 'react-icons/fa'
import './style.css'

export const Header = () => {
    return(
        <header>
            <h1 className='header-title'>Coffee Shop</h1> 
            <div className='search-container'>     
                <FaSearch className='search-icon'/>
                <input type='text' className='search-input'></input>
            </div>
        </header>
    )
}