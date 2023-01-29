import './style.css'

export const Inline = ({info1, info2}) => {
    return(
        <div className="inline-container">
            <p>{info1}</p>
            <p>{info2}</p>
        </div>
    )
}