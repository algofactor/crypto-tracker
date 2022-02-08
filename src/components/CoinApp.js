import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import "./Coin.css"

const CoinApp = () => {
    // States
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    // Data
    useEffect(() => {
        const getCoins = async () =>{
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').catch(error => console.log(error));
            const data = await response.json();
            setCoins(data)
        }
        getCoins();
    }, []);

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }    

    const filteredCoins =  coins.filter((coin)=>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )



  return (
    <div className="coin-app">
        <div className="coin-search">
            <h1 className='title'>Search a currency</h1>
            <form className='search-form'>
                <input onChange={handleChange} className='search-input' type="search" placeholder='Search' />
            </form>
        </div>
        <div className="coin-details">
            {filteredCoins.map(coin =>{
                return(
                    <Coin image={coin.image} name={coin.name} key={coin.id} symbol={coin.symbol} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap} volume={coin.total_volume}  />
                )
            })}
        </div>
        
    </div>
  );
};

export default CoinApp;
