import { useState } from 'react'
import { InlineBold } from '../inline-info/InlineBold'
import { Button } from './Button'
import { OrderInfo } from './OrderInfo'
import './style.css'

export const Cart = () => {

    return(
        <aside className="cart-container">
            <InlineBold info1={'Bill'} info2={'Today'}/>
            <div className="cart-info-wrapper">
                <OrderInfo/>
                <OrderInfo/>
                <OrderInfo/>
            </div>
            <InlineBold info1={'Total'} info2={0.00}/>
            <Button value={'Pay By Card'} active={true}/>
            <Button value={'Pay By Cash'} active={false}/>
        </aside>
    )
}