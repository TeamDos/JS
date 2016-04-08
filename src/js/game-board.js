import React, { Component, PropTypes } from 'react';


export default class GameBoard extends Component {

	static propTypes = {

		// countdown: PropTypes.func.isRequired
		toLogout: PropTypes.func.isRequired,
		toUpload: PropTypes.func.isRequired,
		startGame: PropTypes.func.isRequired

	}

	clickHandler(){

		this.props.toLogout();

	}

	uploadHandler(){

		this.props.toUpload();

	}

	gameInitiator(){

		this.props.startGame();
	}

	render(){

		return(
		<div className="gameboard-wrapper">

			<div className="game-board">

				<div className="logo">Bongo</div>

				<button className="logout" onClick={::this.clickHandler}>Logout</button>
					<br/>

				<div className="gameboard-flex-wrapper">



				<p><i class="fa fa-globe"></i><br/>Bongo, the geo-guessing game, 
				tests your knowledge of the world by seeing
				if you can guess the country of famous (and sometimes not 
				so famous) structures and sites by photo.  
				Guess right and win 10 points,
				Skip and lose 5 points. 
				You're on a timer, so think fast!</p>

				<br/>

				<h1 onClick={::this.gameInitiator}>Start!</h1>

			
				<button className="uploader" onClick={::this.uploadHandler}>add your own question to the quiz here</button>

				</div>
			</div>
		</div>

			);

	}

}