import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class Uploader extends Component{

	// constructor(){
	// 	super();
	// 	this.state = {

	// 		preview: 

	// 	}
	// }

	dataHandler(data){
		if (data.file && data.caption){
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

	render(){

		return(

			<SSF onData={::this.dataHandler}>

				<h1>Uploader Page</h1>

				<Dropzone onDrop={::this.dropHandler}>

				</Dropzone>

				<label>Enter caption below:
					<input type="text" name="caption"></input>
				</label>

				<button>Submit</button>

			</SSF>

			);

	}

}