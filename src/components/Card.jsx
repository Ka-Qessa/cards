import React from "react"

function Card(props) {
const {card} = props;

    return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <div className="card-title">{card.title}</div>
        <p className="card-text">{card.text}</p>
        <a href="#" className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
