import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins]=useState([])
    // console.log(coins)
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
        .then(res=>res.json())
        .then(data=>setCoins(data))
        
    })
    return (
        <div className='px-4 pt-20 pb-24 mx-auto mx-w-7xl '>
            <h2 className='text-3xl text-center font-bold text-gray-500'>Availabol Coins</h2>
            <h1 className='text-xl text-center text-gray-500 mb-12 font-normal'>Total:{coins.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4'>
            {coins.map(coin=><CoinCard
            key={coin.id}
            coin={coin}
            ></CoinCard>)
            }
            </div>
        </div>
    );
};

export default Coins;