import React, { Component, PropTypes } from 'react';
import Cookies from 'js-cookie';

export default class Leaderboard extends Component {

	static propTypes = {

		leaderboardData: PropTypes.array.isRequired,
		playAgain: PropTypes.func.isRequired,
		addImg: PropTypes.func.isRequired,
		toLogout: PropTypes.func.isRequired,
		currentGame: PropTypes.object.isRequired

	}

	clickHandler(){

		let { playAgain } = this.props;

		playAgain();

	}

	addHandler(){

		let { addImg } = this.props;

		addImg();

	}

	logoutHandler(){

		let { toLogout } = this.props;

		toLogout();

	}

	render(){

		return(

			<div className="leaderboard-wrapper">
			
				<div className="logo">Bongo</div>

				<button className="logout" onClick={::this.logoutHandler}>Logout</button>

				<div className="leaderboard-flex">


				<div className="congrats">Congrats {this.props.currentGame.username}, 
				<br/>you finished with a score of {this.props.currentGame.score}! See how you stack up against others below.</div>


				<h1>Leaderboard</h1>

				<ul>
				 	{this.props.leaderboardData.map( user => <li key={user.username + user.score}>{user.username}: {user.score}</li>)}
				</ul>

				<button className="leaderboard-playagain" onClick={::this.clickHandler}>Play Again</button>

				<button className="leaderboard-to-uploader" onClick={::this.addHandler}>Add a famous landmark to the game!</button>
				</div>
			</div>

			);

	}

}