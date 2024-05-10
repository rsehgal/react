import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
