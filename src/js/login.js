import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';


export default class Login extends Component{

	static propTypes = {

		addUserFunc: PropTypes.func.isRequired

	}

	clickHandler(newUser){

		console.log(newUser);

		if(newUser.username && newUser.password){
			this.props.addUserFunc(newUser);
		}else{

			alert("need a username and a password");

		}
		

	}

	render(){

		return(
			<div className="login-wrapper">
				<span className="logo-header"> Bongo </span>

				<p className="logo-subheader"> a geo-guessing game</p>
				<br/> <br/>

				<div className="login">
					<h1>Log in</h1>
					<SSF onData={::this.clickHandler}>
					<br/>

						<label>USERNAME: </label>
							<input type="text" name="username"></input>
						
						<br/><br/>

						<label>PASSWORD: </label>
							<input type="password" name="password"></input>
						
						<br/><br/>

						<button>Submit</button>
					</SSF>
				</div>
			</div>
			);

	}

}