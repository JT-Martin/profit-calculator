import './App.css';
import React from 'react';
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'

function App(props) {
  return (
    <div id="app-container">
      <Section1 
        price={props.price} 
        callsBooked={props.callsBooked} 
        showRate={props.showRate} 
        closeRate={props.closeRate} 
        priceChange={props.priceChange} 
        bookedCallsChange={props.bookedCallsChange} 
        showRateChange={props.showRateChange} 
        closeRateChange={props.closeRateChange}
      />
      <Section2 
        price={props.price} 
        callsBooked={props.callsBooked} 
        showRate={props.showRate} 
        closeRate={props.closeRate} 
        completedCalls={props.completedCalls}
        dealsWon={props.dealsWon}
        totalRevenue={props.totalRevenue}
        />
    </div>
  );
}

export default App;
