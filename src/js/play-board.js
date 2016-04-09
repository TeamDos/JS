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
			currentScore: 0,
			input: ""

		}

	}

	dataHandler(data){

		let { imgToDisplay, currentScore, input } = this.state;
		let { gameData } = this.props;

		if(data.caption === gameData[imgToDisplay].caption){

			////go to next img


			//////this might need to go in setState //////////////////////////////////////////
			currentScore +=10;
			imgToDisplay++;
			// input = "";
			this.setState({ imgToDisplay });
			this.setState({ currentScore });
			this.setState({ input: "" });


			/////need to think through what clears the input field as well

		}else{

			alert("wrong answer, try again");
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
				///POST request: username and score

				this.props.onGameOver(this.state.currentScore);

			}
			this.setState({countdown});
		}, 1000);
	}

	changeHandler(event){

		this.setState( { input: event.target.value });

	}

	clickHandler(){

		let { currentScore, imgToDisplay } = this.state;
		currentScore -=5;
		imgToDisplay++;

		this.setState({

				currentScore,
				imgToDisplay

			});

	}

	render(){

		let { gameData } = this.props;
		let { imgToDisplay } = this.state;

		console.log("gameData", gameData);
		console.log("gameData", gameData[imgToDisplay].img);
		console.log(imgToDisplay);

		return(
			<div className="playboard-wrapper">

				<div className="countdown">
				
					TIME LEFT:<br/>
					<span className="countdown-numbers"> {this.state.countdown}</span> seconds
					<button onClick={::this.clickHandler}>SKIP</button>
				</div>	
				
				

				<SSF onData={::this.dataHandler}>
					<div>
						<img src={gameData[ imgToDisplay ].img} alt={gameData[ imgToDisplay ].caption}/>
					</div>
					<label>What country is this?
						<input type="text" name="caption" value={this.state.input} onChange={::this.changeHandler}></input>
					</label>

					<button>SUBMIT</button>

				</SSF>
				
			</div>

			);

	}

}