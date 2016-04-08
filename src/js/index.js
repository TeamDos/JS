// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import Login from "./login";
import { ajax } from 'jquery';
import GameBoard from './game-board';
import Uploader from './Uploader';
import Cookies from 'js-cookie';
import PlayBoard from './play-board';

let loggedInUser = null;

function addUser(newUser) {
	
	let data = new FormData();
	data.append('username', newUser.username);
	data.append('password', newUser.password);
	console.log(newUser);

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/signups',
      type: 'POST',
      data: data,
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

	let submission = new FormData();
	submission.append('file', data.file);
	submission.append('caption', data.caption);


	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/images',
      type: 'POST',
      data: submission,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(() => {
    	
		renderGameBoard();
    });
}

//////////GET example from class

// ajax({url}).then(data => {
//     NProgress.done();
//     ReactDOM.render(
//       <UserList
//       users={data}
//       onUserSelect={renderDetails}
//       onUserRemove={removeAndRender}
//       onNew={renderAdd}/>
//       , document.querySelector('.app')
//     );
//   });

// }

function stageGame (){

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/images',
      type: 'GET',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then( data => {

	render(

		<PlayBoard gameData={ data } onGameOver={getLeaderboardData}/>,
		document.querySelector('.app')
	);

	});
}


function getLeaderboardData (){

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/users',
      type: 'GET',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then( data => {
    	
    	render(

		<Leaderboard leaderboardData={ data } playAgain={renderGameBoard}/>,
		document.querySelector('.app')
		
	);
    });

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

		<GameBoard toUpload={renderUploader} toLogout={logout} startGame={stageGame}/>,
		document.querySelector('.app')
	);

};


function renderUploader (){

	render(

		<Uploader sendData={sendDataAndRenderGame} toLogout={logout}/>,
		document.querySelector('.app')
	);

};

// function renderLeaderboard(){

// 	render(

// 		<Leaderboard leaderboardData={getLeaderboardData} playAgain={renderGameBoard}/>,
// 		document.querySelector('.app')
// 	);

// };

// function renderPlayBoard (){

// 	render(

// 		<PlayBoard gameData={stageGame} onGameOver={renderLeaderboard}/>,
// 		document.querySelector('.app')
// 	);

// };

function logout (){

	loggedInUser = null;
	////empty cookies for user
	Cookies.remove('username');
	renderLogin();

}

renderLogin();
// renderPlayBoard();
// renderGameBoard();
//renderUploader();
