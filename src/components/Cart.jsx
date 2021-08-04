import React, { useState, useEffect } from 'react'
import Table from './Table'
import axios from 'axios'
import './style.css'
import Receipt from './Receipt'

export default function Cart({cartCoins}) {    
    const [isCart, setIsCart] = useState(true)
    const [isDisplay, setIsDisplay] = useState(false)
    const [coins, setCoins] = useState([])    
    const [total, setTotal] = useState(1)
    useEffect(()=>{
        axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res=>{
            setCoins(res.data)
        })
        .catch(()=>{
            console.log('error')
        })
    }, [])
    const decrease = () => {
        if(total===0){
            setTotal(0)
        }
        else{
            setTotal(total-1)
        }
    }
    const handleTableClick = () => {
        setIsCart(false)
    }
    const displayReceipt = () => {
        setIsDisplay(true)
    }
    console.log(cartCoins)

    return (
        <div>
            {
                (isCart)?
                (
                    <>
                    <p onClick={handleTableClick}>Table</p>
                    <h1>Cart</h1>
                    {
                        coins.map(coin => {
                            if(cartCoins.includes(coin.name)){
                                console.log(coin)
                                return (
                                    <div key={coin.id}>
                                        <div className="cart_coin_row">
                                            <img className="cart_coin_img" src={coin.image} alt="crypto" />
                                            <h1>{coin.name}</h1>
                                            <p>{coin.symbol.toUpperCase()}</p>
                                            <p>₹ {coin.current_price.toLocaleString()} x {total}</p>
                                            <button className="cart_btn" onClick={decrease}>-</button>
                                            <p>{total}</p>
                                            <button className="cart_btn" onClick={() => setTotal(prev=> prev + 1)}>+</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <input type="button"
                    value="buy"
                    className="cart_btn"
                    onClick={displayReceipt}
                    />
                    {
                        (isDisplay)? 
                        (<Receipt 
                        allCoins={coins}
                        cartCoins={cartCoins}
                        total={total}
                        />):
                        (console.log("none"))
                    }
                    </>
                ):
                (
                    <Table/>
                )
            }
        </div>
    )
}
