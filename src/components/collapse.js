import React from "react";

class Collapse extends React.Component {
  constructor(props) {
    super();

    this.state = { showContent: true };
  }

showMore = () =>{
    this.setState({ showContent: !this.state.showContent });
}

  render() {
    return (
      <div>
        <button onClick={this.showMore} className="btn btn-primary p-2 mt-3 mb-1 w-100">Link with href</button>

        {
            this.state.showContent ? ( <div className="collapse show">{this.props.children}</div>) : null
        }

       
      </div>
    );
  }
}
export default Collapse;

//   Fonksiyonel component olarak yazim sekli
// const Collapse = (props) => {
//   return (
//     <div>
//       <a
//         className="btn btn-primary p-2 mt-3 mb-1 w-100"
//         data-bs-toggle="collapse"
//         href={"#".concat(props.href)}
//         role="button"
//         aria-expanded="false"
//         aria-controls="collapseExample"
//       >
//         Link with href
//       </a>

//       <div className="collapse show" id={props.href}>
//          {props.children}
//       </div>
//     </div>
//   );
// };
// export default Collapse;
