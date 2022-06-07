import React from "react";
import './Section2.css'

function Section2(props) {
    
    // props.price, props.callsBooked, props.showRate, props.closeRate
    
    return(
        <div id='Section-2'>
            <div id="Section-2-Top">
                <h4 id="Section-2-Top-Title">Total revenue earned each month working with Dino</h4>
                <div id="big-number">{'$' + props.totalRevenue}</div>
                <div id="button-div">
                    <a href="#open-popup" id="CTA-Button">Book Your "Next Level" Call Now</a>
                </div>
                
            </div>
            <div id="Section-2-Bottom">
                <div className="profit-calc-item-title">How did we get this number?</div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Calls completed:
                    </div>
                    <div>
                        {props.completedCalls}
                    </div>
                </div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Deals won:
                    </div>
                    <div>
                        {props.dealsWon}
                    </div>
                </div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Total revenue:
                    </div>
                    <div>
                        {'$' + props.totalRevenue}
                    </div>
                </div>
                <div class="profit-calc-divider"></div>
                <div className="profit-calc-item-title">Revenue Breakdown:</div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Weekly:
                    </div>
                    <div>
                        {'$' + Math.round(props.totalRevenue / 4)}
                    </div>
                </div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Daily:
                    </div>
                    <div>
                        {'$' + Math.round(props.totalRevenue / 22)}
                    </div>
                </div>
                <div className="profit-calc-item">
                    <div className="profit-calc-item-left">
                        Hourly:
                    </div>
                    <div>
                        {'$' + Math.round(props.totalRevenue / 176)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2