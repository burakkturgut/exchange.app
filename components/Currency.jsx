import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_8OsHRYHXY5kmKIOnzKBxpobRWOxlLJagFqYCqJ5g";

function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }


    return (

        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'goldenrod', color: '#fff', width: '100%', textAlign: 'center' }}>
                <h3>DÖVİZ KURU HESAPLAMA</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='input-enter' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowCircleRight />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='input-output' />
            </div>
            <div>
                <button onClick={exchange} className='exchange-button '>ÇEVİR</button>
            </div>
        </div>

    )
}

export default Currency