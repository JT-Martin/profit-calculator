import React, {useState, useEffect} from 'react';
import App from '../Components/App/App'

function AppContainer() {
    const [price, setPrice] = useState("3000");
    const [callsBooked, setCallsBooked] = useState("10");
    const [showRate, setShowRate] = useState("70");
    const [closeRate, setCloseRate] = useState("50")
    const [completedCalls, setCompletedCalls] = useState()
    const [dealsWon, setDealsWon] = useState()
    const [totalRevenue, setTotalRevenue] = useState()
    
    

    const handlePriceChange = (event) => {
        const updatedPrice = event.target.value;
        setPrice(updatedPrice);
    }

    const handleBookedCallsChange = (event) => {
        const updatedCalls = event.target.value;
        setCallsBooked(updatedCalls);
    }

    const handleShowRateChange = (event) => {
        const updatedShowRate = event.target.value;
        setShowRate(updatedShowRate);
    }

    const handleCloseRateChange = (event) => {
        const updatedCloseRate = event.target.value;
        setCloseRate(updatedCloseRate);
    }

    useEffect(() => {
        const updatedCompletedCalls = Math.floor(Number(callsBooked) * Number(showRate/100))
        const dealsWon = Math.floor(Number(callsBooked) * Number(showRate/100) * Number(closeRate/100))
        const updatedTotalRevenue = Number(price) * Number(dealsWon)
        setCompletedCalls(updatedCompletedCalls)
        setDealsWon(dealsWon)
        setTotalRevenue(updatedTotalRevenue);
    }, [price, callsBooked, showRate, closeRate, completedCalls])
  
    return (
    <App 
        price={price} 
        callsBooked={callsBooked} 
        showRate={showRate} 
        closeRate={closeRate}
        completedCalls={completedCalls}
        dealsWon={dealsWon}
        totalRevenue={totalRevenue}
        priceChange={handlePriceChange}
        bookedCallsChange={handleBookedCallsChange}
        showRateChange={handleShowRateChange}
        closeRateChange={handleCloseRateChange}
        />
  );
}


export default AppContainer;