import React from 'react';

const Coin = ({image, name, symbol, price, priceChange, marketCap, volume}) => {
  return (
      <div className="coin-container">
          <div className="tag">
            <img className='crypto-logo' src={image} alt="Logo" />
            <p>{name}</p>
          </div>
          <div className="cell">
            <p className='symbol'>{symbol}</p>
          </div>
          <div className="cell">
            <p>${price.toLocaleString()}</p>
          </div>
          <div className="cell">
            <p>${volume.toLocaleString()}</p>
          </div>
          <div className="cell">
            <p className={priceChange < 0 ? 'red' : 'green'} >{priceChange.toFixed(2)} %</p>
          </div>
          <div className="cell mcap">
            <p>MarketCap:</p>
            <p>{marketCap.toLocaleString()}</p>
          </div>
      </div>
  )
};

export default Coin;
