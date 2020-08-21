/** @format */

import React from "react";
import PropTypes from "prop-types";
import HotDogsItem from "../hot-dogs-item/hot-dogs-item";

import "./hot-dogs-list.css";
const HotDogsList = ({ hotDogs }) => (
	<div className="listContainer">
		{hotDogs.map(({ image, title, price, text, id }) => (
			<HotDogsItem
				image={image}
				text={text}
				title={title}
				price={price}
				key={id}
			/>
		))}
	</div>
);

HotDogsList.propTypes = {
	hotDogs: PropTypes.array,
};

HotDogsList.defaultProps = {
	hotDogs: [],
};
export default HotDogsList;
