import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   return <h1>Benim adim Ebruli</h1>;
// }

// ReactDOM.render(<App />, document.getElementById("root"));
// class App2 extends React.Component {
//   render() {
//     return <h1>Benim adim Kurkuli</h1>;
//   }
// }
// ReactDOM.render(<App2 />, document.getElementById("root2"));
const names = ["Ali ", "Ebruli", "Veli"];

function App() {
  return (
    <div>
      {names.map((name) => (
        <h1 className="aramsam" style={{color: "red", backgroundColor: "Green"}} >{name}</h1>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
