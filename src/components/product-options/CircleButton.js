import './style.css'

export const CricleButton = ({value, onClick}) => {
    return(
        <button onClick={onClick} className="circle option-btn">{value}</button>
    )
}