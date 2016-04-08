import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import Countries from './countries';

export default class Uploader extends Component{

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

	render(){

		return(

			<div>
				<button onClick={::this.clickHandler}>Logout</button>

				<SSF onData={::this.dataHandler}>

					<h1>Uploader Page</h1>

					<Dropzone onDrop={::this.dropHandler}>

					</Dropzone>

					
						<Countries>
						</Countries>
					

					<label>Enter caption below:
						<input type="text" name="caption"></input>
					</label>

					<button>Submit</button>


				</SSF>
			</div>

			);

	}

}