import React from "react";
import './Section1.css'

function Section1(props) {
    
    
    return(
        <div id="Section-1">
            <div className="card-padding">
                <div className='form-div'>
                    <form>
                        <label className="input-label">What's the price of your product?</label>
                        <div className="profit-calc-input-container">
                            <div className="profit-calc-input-dollar">$</div>
                            <input type="number" className="profit-calc-input-field" maxLength="256" min={0} name="Price-number" data-name="Price number" value={props.price} id="price-input-field" onChange={props.priceChange} required/>
                        </div>
                        <label className="input-label">Calls booked per month:</label>
                        <div className='profit-calc-input-container'>
                            <input type="number" className="profit-calc-input-field" maxLength="256" value={props.callsBooked} id="Calls-Booked-input-field" onChange={props.bookedCallsChange} required/>
                        </div>
                        <label className="input-label">Show up rate for calls:</label>
                        <div className="profit-calc-input-container perc">
                            <input type="number" className="profit-calc-input-field" min={0} max={100} maxLength="256" id="Show-Rate-input-field" value={props.showRate} onChange={props.showRateChange} required/>
                            <div className="profit-calc-input-perc">%</div>
                        </div>
                        <label className="input-label">Close rate for calls:</label>
                        <div className="profit-calc-input-container perc">
                            <input type="number" className="profit-calc-input-field" maxLength="256" min={0} max={100} id="Close-Rate-input-field" value={props.closeRate} onChange={props.closeRateChange} required/>
                            <div className="profit-calc-input-perc">%</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section1