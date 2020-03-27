import React from "react";

const ProductItem = ({
  id,
  title,
  year,
  runtime,
  genres,
  director,
  actors,
  plot,
  posterUrl
}) => {
  return (
    <div className="product-item">
      <h3 className="title">{title}</h3>
      <div className="details">
        <span className="year">{year}</span>
        <span className="runtime">{runtime}</span>
        <span className="genres">{genres}</span>
        <span className="director">{director}</span>
        <span className="actors">{actors}</span>
        <span className="plot">{plot}</span>
        <span className="posterUrl">{posterUrl}</span>
      </div>
    </div>
  );
};

export default ProductItem;
