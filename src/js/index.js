// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import Login from "./login";
import { ajax } from 'jquery';
import GameBoard from './game-board';
import Uploader from './Uploader';


function addUser(newUser) {

	console.log(newUser);
	renderGameBoard();

	// data.append('username', newUser.username);
	// data.append('password', newUser.password);


	// ajax({
 //      url: 'http://localhost:8025/upload',
 //      type: 'POST',
 //      data: newUser,
 //      cache: false,
 //      dataType: 'json',
 //      processData: false,
 //      contentType: false
 //    }).then(() => {
 //    	
		//renderGameBoard();
 //    });

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

	render(

		<Login addUserFunc={addUser}/>,
		document.querySelector('.app')
	);

};

function renderGameBoard (){

	render(

		<GameBoard toUpload={renderUploader}/>,
		document.querySelector('.app')
	);

};

function renderUploader (){

	render(

		<Uploader sendData={sendDataAndRenderGame}/>,
		document.querySelector('.app')
	);

};

renderLogin();

