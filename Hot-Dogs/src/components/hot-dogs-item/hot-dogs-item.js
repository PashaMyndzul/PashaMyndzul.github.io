/** @format */

import React from "react";
import PropTypes from "prop-types";
import "./hot-dogs-item.css";
const HotDogsItem = ({ title, price, text, image, id }) => (
	<div className="itemContainer" key={id}>
		<img src={image} alt="pic" width="300" height="250" />
		<h1>{title}</h1>
		<h2>{price}</h2>
		<p>{text}</p>
		<button className="editButton">Edit</button>
	</div>
);
HotDogsItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.string,
	id: PropTypes.number,
};

HotDogsItem.defaultProps = {
	title: "",
	price: "",
	text: "",
	image: "",
	id: 0,
};
export default HotDogsItem;
