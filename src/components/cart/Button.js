import './style.css'

export const Button = ({value, onClick, active}) => {
    return(
        <button className={active ? "btn-active custom-btn" : "btn-not-activated custom-btn"} onClick={onClick}>{value}</button>
    )
}