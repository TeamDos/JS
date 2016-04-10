import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import Countries from './countries';

export default class Uploader extends Component{

	static propTypes = {

		sendData: PropTypes.func.isRequired,
		toLogout: PropTypes.func.isRequired,
		backToGame: PropTypes.func.isRequired

	}

	// constructor(){
	// 	super();
	// 	this.state = {

	// 		preview: 

	// 	}
	// }

	dataHandler(data){
		if (this.file && data.caption){
			data.file = this.file;
			console.log(data);
			this.props.sendData(data);
		}else{

			alert("You must enter a caption and an image");

		}
		

	}

	dropHandler([file]){

		this.file = file;
	}

	clickHandler(){

		this.props.toLogout();

	}

	returnToGameHandler(){

		this.props.backToGame();

	}

	render(){

		return(

			<div className="uploader-wrapper">
				<div className="logo">Bongo</div>
				<button className="logout" onClick={::this.clickHandler}>Logout</button>
			


				<div className="uploader-wrapper-flex">

					<SSF onData={::this.dataHandler}>

						<h1>Add your own content!</h1>
						<h3>click or drag in drop a filein the field below</h3>
						<h4>landscapes preferred</h4>
						<br/>
						<br/>


						<Dropzone onDrop={::this.dropHandler}>
						click or drag and drop 
						 your image file here.
						 landscape view preferred!
						</Dropzone>
						<br/>
						<br/>

						<Countries></Countries>
						<br/>
						<br/>

						<label>Enter caption below:
						<br/>
						<br/>
							<input type="text" name="caption"></input>
						</label>
						<br/>
						<br/>
						<button className="submit">Submit</button>


					</SSF>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>

				<button className="submit" onClick={::this.returnToGameHandler}>Play Game</button>
				</div>
		
			</div>


			);

	}

}


