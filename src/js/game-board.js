import React, { Component, PropTypes } from 'react';


export default class GameBoard extends Component {

	// static propTypes = {



	// }

	clickHandler(){

		this.props.toUpload();

	}

	render(){

		return(

			<div className="game-board">

				<h1>Click Image to Play</h1>

				<button onClick={::this.clickHandler}>Upload your own image!</button>

			</div>

			);

	}

}