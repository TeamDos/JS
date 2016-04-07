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

			<div className="login=wrapper">
				<h1>Log in</h1>
				<SSF onData={::this.clickHandler}>

					<label>Enter username:
						<input type="text" name="username"></input>
					</label>

					<label>Enter password:
						<input type="password" name="password"></input>
					</label>

					<button>Submit</button>
				</SSF>

			</div>

			);

	}

}