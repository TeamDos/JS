import React, { Component, PropTypes } from 'react';

export default class Leaderboard extends Component {

	static propTypes = {

		leaderboardData: PropTypes.array.isRequired,
		playAgain: PropTypes.func.isRequired

	}

	clickHandler(){

		let { playAgain } = this.props;

		playAgain();

	}

	render(){

		return(

			<div>

				<h1>Leaderboard</h1>

				<ul>{
					leaderboardData.map( user => <li>{user.username}: {user.score}</li>)}
				</ul>

				<button onClick={::this.clickHandler}>Play Again</button>

			</div>

			);

	}

}