import React from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";

function Currency() {
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'goldenrod', color: '#fff', width: '100%', textAlign: 'center' }}>
                <h3>DÖVİZ KURU HESAPLAMA</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input type="number" className='input-enter' />
                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowCircleRight />
                <select className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input type="number" className='input-output' />
            </div>
            <div>
                <button className='exchange-button '>ÇEVİR</button>
            </div>
        </div>

    )
}

export default Currency