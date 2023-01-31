import './style.css'

export const CricleButton = ({value, onClick, prop}) => {

    return(
        <button onClick={onClick} value={value} className={prop == value ? "circle circle-btn-active" : "circle"}>{value}</button>
    )
}