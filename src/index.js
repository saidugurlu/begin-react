import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Collapse from "./components/collapse";
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

const App = () => {
  return (
    <div className="container">
      <div className="card-group row">
        <div className="col">
          <Collapse href="collapseExample1">
            <Card
              // cardTitle="Said Ugurlu"
              cardText="Lorem Upsum Text I"
              updatedTime="Last updated 2 mins ago"
              image="https://picsum.photos/200/300?grayscale"
            />
          </Collapse>
        </div>
        <div className="col">
          <Collapse href="collapseExample2">
            <Card
              cardTitle="Vera Ugurlu"
              cardText="Lorem Upsum Text II"
              updatedTime="Last updated 1 mins ago"
              image="https://picsum.photos/200/300"
            />
          </Collapse>
        </div>
        <div className="col">

       
        <Collapse  href="collapseExample3">
          <Card
            cardTitle="Süheyla Ugurlu"
            cardText="Lorem Upsum Text III"
            updatedTime="Last updated 5 mins ago"
            image="https://picsum.photos/seed/picsum/200/300"
          />
        </Collapse>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
