import React from 'react'

const Weather = ({temp}) => {
  

    if(temp > 30) {
    return (
      <div>
        <h1>It's hot outside!</h1>
      </div>
    )
    }
    else if(temp > 20) {    
        return (
            <div>
            <h1>It's warm outside!</h1>
            </div>
        )
    }
    else{
        return (
            <div>
            <h1>It's cold outside!</h1>
            </div>
        )
    }
  
}

export default Weather
