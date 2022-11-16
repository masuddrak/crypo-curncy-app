import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    const [loading, setLoding] = useState(false)
    console.log(coin)
    useEffect(() => {
        setLoding(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                setLoding(false)
            })
    }, [id])
    return (
        <>
            {
                loading ? (<Spinner></Spinner>) : (<div className='grid grid-cols-2 items-center justify-center'>
                    <div>
                        <h1 ><span className='text-2xl'>Coin Name </span>:{coin.name}</h1>
                        <h1 ><span className='text-2xl'>Country Origin </span>:{coin.country_origin
                        }</h1>
                        <h1 ><span className='text-2xl'>Contract Address
                        </span>:{coin.contract_address
                            }</h1>
                    </div>
                    <div>
                        <img src={coin.image?coin.image.large:''} alt="" />
                    </div>
                </div>)
            }
        </>
    );
};

export default CoinDetails;