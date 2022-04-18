import React from 'react';
import ReactDOM from 'react-dom/client';
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
// const names = ["Ali ", "Ebruli", "Veli"];
// const str1= "click "
// const str2= "me "
// function App() {
//   return (
//     <div>
//       {names.map((name) => (
//         <h1 className="aramsam" style={{color: "red", backgroundColor: "Green"}} >{name}</h1>
//       ))}

//       <button className = "btn btn-primary">{str1.concat(str2)}</button>
//     </div>
//   );
// }
import Card from "./components/card";
const App = () => {
  return (
    <div>
      <div className="card-group">
        <Card cardTitle="Said Ugurlu" />
        <Card cardTitle="Vera Ugurlu" />
        <Card cardTitle="Süheyla Ugurlu" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
