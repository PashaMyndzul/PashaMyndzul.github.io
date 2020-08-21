/** @format */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/header";
import HotDogsList from "./components/hot-dogs-list/hot-dogs-list";
import { addHotDogs } from "./actions/actionCreator";

class HotDogsApp extends Component {
	state = {
		isOpen: false,
	};
	openModal = () => {
		this.setState({ isOpen: true });
	};

	handleSubmit = () => {
		console.log("Submit function!");
		this.setState({ isOpen: false });
	};

	handleCancel = () => {
		console.log("Cancel function!");
		this.setState({ isOpen: false });
	};

	render() {
		const { hotDogs } = this.props;

		return (
			<Fragment>
				<Header
					isOpen={this.state.isOpen}
					handleCancel={this.handleCancel}
					openModal={this.openModal}
				/>
				<HotDogsList hotDogs={hotDogs} />
			</Fragment>
		);
	}
}

export default connect(
	(state) => ({
		hotDogs: state.hotDogs,
	}),
	{ addHotDogs }
)(HotDogsApp);
