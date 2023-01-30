import { CricleButton } from './CircleButton'
import './style.css'

export const OptionCard = () => {
    return(
        <div className="option-card">
            <p className="option-card-title">text</p>
            <CricleButton value={"30%"}/>
            <CricleButton value={"50%"}/>
            <CricleButton value={"70%"}/>
        </div>
    )
}