import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime)

// function loginPage() {
//   if(isLoggedIn){
//     return <h1 className="container">Welcome User!</h1>
//   } else {
//     return (
//       <Login />
//     );
//   }
// }

function App() {
  return (
    <h1 className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Welcome User!</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </h1>
  )
}

export default App;
