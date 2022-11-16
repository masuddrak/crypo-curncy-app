import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id}=useParams()
    const [coin, setCoin]=useState({})
    console.log(coin)
    useEffect(()=>{
        const url=`https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setCoin(data))
    },[id])
    return (
        <div className='flex justify-between'>
            <div>
                <h1>Coin Name :{coin.name}</h1>
                {/* <p>{coin.description.en}</p> */}
            </div>
            <div>
                {/* <img src={coin.image.large} alt="" /> */}
            </div>
        </div>
    );
};

export default CoinDetails;