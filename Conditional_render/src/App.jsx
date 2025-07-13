import React from 'react'
import Weather from './components/Weather'
// Example Perfo component with conditional rendering
// function Perfo({ name, age }) {
//   return (
//     <div>

//       <h2>Name: {name}</h2>
//       <h3>
//         {age >= 18 ? "You are an adult." : "You are a minor."}
//       </h3>

//       {/* Logical AND example */}
//       {age >= 18 && <p>You can vote!</p>}

//     </div>
//   )
// }

function App() {
  return (
   
    <div>
        <Weather city="blr" temp={35}/>
    </div>
  )
}

export default App