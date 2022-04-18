import React from "react";
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------------------------------
// Fonksiyonel component olarak yazdigimiz örnek. (State durumu olmadiginda tercih edilir)

// const Card = (props) => {
//   return (
//     <div className="card">
//       <img src={props.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.cardTitle}</h5>
//         <p className="card-text">{props.cardText}</p>
//         <p className="card-text">
//           <small className="text-muted">{props.updatedTime}</small>
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Card;

// ----------------------------------------------------------------------------------------------
// Class component olarak yazdigimiz örnek. (State durumu oldugunda tercih edilir)

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  cardTitle: "It is a default title",
};

Card.propTypes = {
  cardText: PropTypes.string.isRequired,
};
export default Card;
