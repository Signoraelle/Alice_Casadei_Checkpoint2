import React from "react";
import PropTypes from "prop-types";
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
    <div className="card">
      <div class="poster">
        <img src={posterUrl} alt="" className="img" />{" "}
      </div>
      <div class="details">
        <h2 className="title">
          {title} ({year}) <h6>Diretto da {director}</h6>
        </h2>

        <div class="tags">{genres}</div>

        <div class="info">{plot}</div>
        <h4 className="runtime">Durata {runtime}</h4>
        <div class="star">
          <h5> {actors} </h5>
        </div>
        <div ng-app="app">
          <div ng-controller="ctrl"></div>
        </div>
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
