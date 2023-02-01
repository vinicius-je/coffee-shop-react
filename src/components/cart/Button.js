import './style.css'

export const Button = ({value, btn, setBtn}) => {
    return(
        <button className={btn == value ? "btn-active custom-btn" : "custom-btn"} onClick={() => setBtn(value)}>{value}</button>
    )
}