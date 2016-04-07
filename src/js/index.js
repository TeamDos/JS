// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import Login from "./login";
import { ajax } from 'jquery';
import GameBoard from './game-board';
import Uploader from './Uploader';
import Cookies from 'js-cookie';

let loggedInUser = null;

function addUser(newUser) {

	/////cookies stuff should go in the 'then' method in the ajax chain so it's only set if the POST request was a success

	

	// data.append('username', newUser.username);
	// data.append('password', newUser.password);
	console.log(newUser);

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/signups',
      type: 'POST',
      data: newUser,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then( (response, statusText, { status } ) => {
		

		console.log(status);
    	if (status == 201){

			Cookies.set('username', newUser.username);
			loggedInUser = Cookies.get('username');
			
			console.log(loggedInUser);

			renderGameBoard();

    	}else{

    		alert('login failed');
    		renderLogin();

    	}
    	
		
    });

} 

function sendDataAndRenderGame(data){

	//let submission = new FormData();
	// submission.append('file', data.file);
	// submission.append('caption', data.caption);


	// ajax({
 //      url: 'http://localhost:8025/upload',
 //      type: 'POST',
 //      data: submission,
 //      cache: false,
 //      dataType: 'json',
 //      processData: false,
 //      contentType: false
 //    }).then(() => {
 //    	
		//renderGameBoard();
 //    });

	renderGameBoard();
}

function renderLogin (){

	if (Cookies.get('username')){

		renderGameBoard ();

	}else{
		console.log(loggedInUser);
		render(

		<Login addUserFunc={addUser}/>,
		document.querySelector('.app')
		);
	}

	

};

function renderGameBoard (){

	render(

		<GameBoard toUpload={renderUploader} toLogout={logout} countdown={timer}/>,
		document.querySelector('.app')
	);

};

function timer(){

	let countdownTimer = setInterval(untilZero, 1000);
	let t = 90;

	return untilZero = function(){
		t--;

		return t;

		if (t === 0){
			clearInterval(countdownTimer);
		}


		}

	}


function renderUploader (){

	render(

		<Uploader sendData={sendDataAndRenderGame} toLogout={logout}/>,
		document.querySelector('.app')
	);

};

function logout (){

	loggedInUser = null;
	////empty cookies for user
	Cookies.remove('username');
	renderLogin();

}

renderLogin();
// renderGameBoard();
