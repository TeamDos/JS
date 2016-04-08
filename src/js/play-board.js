import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';


export default class PlayBoard extends Component{


	static propTypes = {

		onGameOver: PropTypes.func.isRequired,
		gameData: PropTypes.array.isRequired

	}

	constructor(){
		super();
		this.state = {

			countdown: 10,
			imgToDisplay: 0,
			currentScore: 0

		}

	}

	dataHandler(data){

		let { imgToDisplay, currentScore } = this.state;
		let { gameData } = this.props;

		if(data.caption === gameData[imgToDisplay].caption){

			////go to next img

			currentScore +=10;
			imgToDisplay++;
			this.setState({ imgToDisplay });

		}else{

			////alert incorrect answer

		}

	}


	componentDidMount() {

		let countInt = setInterval(() => {
			let { countdown } = this.state;
			countdown--;
			if (countdown <= 0) {
				countdown = 0;
				clearInterval(countInt);

				////POST request: username and score 
				//////render Leaderboard and play again page
				console.log(this);


			}
			this.setState({countdown});
		}, 1000);
	}

	render(){

		let { gameData } = this.props;
		let { imgToDisplay } = this.state;

		return(

			<div>

				{this.state.countdown}
				

				<SSF onData={::this.dataHandler}>
					
					<img src={gameData[{ imgToDisplay }].src} alt={gameData[{ imgToDisplay }].caption}/>
					
					<label>What location is this?
						<input type="text" name="caption"></input>
					</label>

					<button>SUBMIT</button>

				</SSF>

				

			</div>

			);

	}

}