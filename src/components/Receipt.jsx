import React, { useState } from 'react'

export default function Receipt({allCoins, cartCoins, total}) {
    const [totalAmount, setTotalAmount] = useState(0)
    return (
        <div>
            <h1>Receipt</h1>
            {
                allCoins.map(coin => {
                    if(cartCoins.includes(coin.name)){
                        console.log(coin)
                        return (
                            <div key={coin.id}>
                                <div className="cart_coin_row">
                                    <img className="cart_coin_img" src={coin.image} alt="crypto" />
                                    <h1>{coin.name}</h1>
                                    <p>{coin.symbol.toUpperCase()}</p>
                                    <p>₹ {coin.current_price.toLocaleString()} x {total}</p>
                                    <p>₹ {(coin.current_price*total).toLocaleString()}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
            <p>PAID: ₹ {totalAmount}</p>
        </div>
    )
}
