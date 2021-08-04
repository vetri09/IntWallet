import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Cart from './Cart'
import './style.css'

export default function Table(props) {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [isTable, setIsTable] = useState(true)
    const [coin, setCoin] = useState([])
    console.log(coin)

    useEffect(()=>{
        axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res=>{
            setCoins(res.data)
        })
        .catch(()=>{
            console.log('error')
        })
    }, [])
    const handleChange = e =>{
        setSearch(e.target.value)
    }
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    function handleCartClick(){
        setIsTable(false)
    }
    
    return (
        <div className="table">
            <div className="table_container">
            {
                (isTable)?
                (
                    <>
                    <h2 className="table_head">Hello <span className="user_name">{props.data}!</span></h2>
                    <p className="table_cart_link" onClick={handleCartClick}>Cart</p>
                    <div className="table_searchbox">
                    <h1 className="table_search">Search a currency</h1>
                    <input className="table_input" type="text" placeholder='Search currency' onChange={handleChange}/>
                    </div>
                    {filteredCoins.map(coin=>{
                        return (
                            <div key={coin.id}>
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
                                        {coin.price_change_percentage_24h.toFixed(2)>0 ?
                                        (<p className="coin_change green">{coin.price_change_percentage_24h.toFixed(2)}%</p>) :
                                        <p className="coin_change red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                        }
                                        <input 
                                        type="button"
                                        value="Add"
                                        className="coin_buy"
                                        onClick={e => {
                                            setCoin(prev=>[...prev, coin.name])
                                        }}
                                        />
                                    </div>       
                                </div>
                            </div>
                        </div>
                        )
                    })
                    }
                    </>
                ):
                (
                    <Cart cartCoins={coin}/>
                )
            }
        </div>
        </div>
    )
}