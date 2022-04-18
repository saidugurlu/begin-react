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
    <div>
      <div className="card-group">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
