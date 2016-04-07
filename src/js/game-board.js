import React, { Component, PropTypes } from 'react';


export default class GameBoard extends Component {

	static propTypes = {

		countdown: PropTypes.func.isRequired

	}

	clickHandler(){

		this.props.toLogout();

	}

	uploadHandler(){

		this.props.toUpload();

	}

	render(){

		return(

			<div className="game-board">
				<button onClick={::this.clickHandler}>Logout</button>

				<h1>Click Image to Play</h1>

				<button onClick={::this.uploadHandler}>Upload your own image!</button>

			</div>

			);

	}

}