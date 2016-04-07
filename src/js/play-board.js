import React, { Component, PropTypes } from 'react';

export default class PlayBoard extends Component{

	constructor(){
		super();
		this.state = {

			countdown: 10

		}

	}

	updateState(){

		let countInt = setInterval(() => {
			let { countdown } = this.state;
			countdown--;
			if (countdown <= 0) {
				countdown = 0;
				clearInterval(countInt);
			}
			this.setState({countdown});
		}, 1000);
		}

	render(){

		return(

			<div>

				{this.state.countdown}

				<button onClick={::this.updateState}>Update state</button>

			</div>

			);

	}

}