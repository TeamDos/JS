import React, { Component, PropTypes } from 'react';

export default class PlayBoard extends Component{

	constructor(){
		super();
		this.state = {

			countdown: 100

		}

	}


	componentDidMount() {

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


	// updateState(){

	// 	let countInt = setInterval(() => {
	// 		let { countdown } = this.state;
	// 		countdown--;
	// 		if (countdown <= 0) {
	// 			countdown = 0;
	// 			clearInterval(countInt);
	// 		}
	// 		this.setState({countdown});
	// 	}, 1000);
	// 	}
	

	render(){

		return(
			<div className="playboard-wrapper">

				<div className="countdown">

					TIME LEFT:<br/>
					<span className="countdown-numbers"> {this.state.countdown}</span> seconds

				</div>
			</div>

			);

	}

}