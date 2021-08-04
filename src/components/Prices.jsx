import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Prices() {
    // api received data will be stored in coins
    const [coins, setCoins] = useState([])
    // axios data fetch
    useEffect(()=>{
        axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=5&page=1&sparkline=false')
        .then(res=>{
            setCoins(res.data)
        })
        .catch(()=>{
            console.log('error')
        })
    }, [])
    return (
        <>
        <div className="price">
        <div className="price_container">
            {/* loop through fetched data and display */}
            {coins.map(coin=>{
                return(
                    <>
                    <div className="coin_container">
                    <div className="coin_row">
                        <div className="coin">
                            <img src={coin.image} alt="crypto" className="coin_image"/>
                            <p className="coin_name">{coin.name}</p>
                            <p className="coin_symbol">{coin.symbol}</p>
                        </div>
                        <div className="coin_data">
                            <p className="coin_price">₹{coin.current_price.toLocaleString()}</p>
                            <p className="coin_volume">{coin.total_volume.toLocaleString()}</p>
                            {coin.price_change_percentage_24h>0 ?
                            (<p className="coin_change green">{coin.price_change_percentage_24h}%</p>) :
                            <p className="coin_change red">{coin.price_change_percentage_24h}%</p>
                            }
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}
        </div>
        </div>
        </>
    )
}
