/** @format */

import React from "react";

import Modal from "../AddHotDogs/Modal";
import "./header.css";
const Header = ({ isOpen, handleCancel, handleSubmit, openModal }) => (
	<>
		<hr className="topLine" />
		<div className="headerContainer">
			<div className="iconContainer">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKtGq1XoWc1XQgRiF56vY8T5VARwBoq2Vkg&usqp=CAU"
					alt="pic"
					width="30"
					height="30"
				/>
				<span className="title">crud</span>
			</div>

			<span className="addButton" onClick={openModal}>
				Add hot-dogs
			</span>
			<Modal
				title="Add new hot-dog"
				isOpen={isOpen}
				onCancel={handleCancel}
				onSubmit={handleSubmit}
			/>
		</div>
		<hr className="bottomLine" />
	</>
);

export default Header;
