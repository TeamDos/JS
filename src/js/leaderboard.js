import React, { Component, PropTypes } from 'react';

export default class Leaderboard extends Component {

	static propTypes = {

		leaderboardData: PropTypes.array.isRequired,
		playAgain: PropTypes.func.isRequired,
		addImg: PropTypes.func.isRequired,
		toLogout: PropTypes.func.isRequired

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

			<div>
				<button onClick={::this.logoutHandler}>Logout</button>

				<h1>Leaderboard</h1>

				<ul>{
					leaderboardData.map( user => <li>{user.username}: {user.score}</li>)}
				</ul>

				<button onClick={::this.clickHandler}>Play Again</button>

				<button onClick={::this.addHandler}>Add a famous landmark to the game!</button>

			</div>

			);

	}

}