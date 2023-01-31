import { useState } from 'react'
import { CricleButton } from './CircleButton'
import './style.css'

export const OptionCard = ({value, prop, setProp, text}) => {

    const onClick = (e) => {
        setProp(e.target.value);
    }

    return(
        <div className="option-card">
            <p className="option-card-title">{text}</p>
            <CricleButton value={value[0]} prop={prop} onClick={onClick}/>
            <CricleButton value={value[1]} prop={prop} onClick={onClick}/>
            <CricleButton value={value[2]} prop={prop} onClick={onClick}/>
        </div>
    )
}