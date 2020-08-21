/** @format */

import React from "react";
import PropTypes from "prop-types";

import Portal from "./Portal";

import "./Modal.css";

const Modal = ({ title, isOpen, onCancel, onSubmit, onChange }) => {
	return (
		<>
			{isOpen && (
				<Portal>
					<div className="modalOverlay">
						<div className="modalWindow">
							<div className="modalHeader">
								<div className="modalTitle">{title}</div>
							</div>

							<div className="modalBody">
								<input placeholder="Name"></input>
								<input placeholder="Title"></input>
								<input placeholder="Description"></input>
								<input placeholder="Image"></input>
							</div>
							<div className="modalFooter">
								<button className="modalButton" onClick={onCancel}>
									No Thanks
								</button>
								<button className="modalButton" onClick={onSubmit}>
									Add
								</button>
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	isOpen: PropTypes.bool,
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

Modal.defaultProps = {
	title: "Modal title",
	isOpen: false,
	onCancel: () => {},
	onSubmit: () => {},
	onChange: () => {},

	value: "",
};

export default Modal;
