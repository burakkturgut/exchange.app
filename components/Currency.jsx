import React from 'react'

function Currency() {
    return (
        <div>
            <div>

            </div>
            <div>
                <input type="number" className='input-enter' />
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <select>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input type="number" className='input-output' />
            </div>
            <div>
                <button>ÇEVİR</button>
            </div>
        </div>

    )
}

export default Currency