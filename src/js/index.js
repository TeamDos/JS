// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import Login from "./login";
import { ajax } from 'jquery';
import GameBoard from './game-board';
import Uploader from './Uploader';
import Cookies from 'js-cookie';
import PlayBoard from './play-board';
import Leaderboard from "./leaderboard";
import _ from 'lodash';

let loggedInUser = null;

function addUser(newUser) {
	
	let data = new FormData();
	data.append('username', newUser.username);
	data.append('password', newUser.password);

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/signups',
      type: 'POST',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then( (response, statusText, { status } ) => {
		
    	if (status == 201){

    		console.log("response.user =>",response.user);
    		console.log("response.user.id =>",response.user.id);

			Cookies.set('username', response.user.username);
			Cookies.set('auth_token', response.user.auth_token);
			Cookies.set('id', response.user.id);
			loggedInUser = Cookies.get();
			// loggedInUser = Cookies.get('auth_token');
			
			console.log("loggedInUser",loggedInUser);

			renderGameBoard();

    	}else{

    		alert('login failed: username already selected');
    		renderLogin();

    	}
    	
		
    });

} 


function logInUser(newUser) {
	
	let data = new FormData();
	data.append('username', newUser.username);
	data.append('password', newUser.password);

	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/login',
      type: 'POST',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then( (response, statusText, { status } ) => {
		
    	if (status == 200){

    		console.log("response.user =>",response.user);
    		console.log("response.user.id =>",response.user.id);

			Cookies.set('username', response.user.username);
			Cookies.set('auth_token', response.user.auth_token);
			Cookies.set('id', response.user.id);
			loggedInUser = Cookies.get();
			// loggedInUser = Cookies.get('auth_token');
			
			console.log("loggedInUser",loggedInUser);

			renderGameBoard();

    	}else{

    		alert('login failed: incorrect username');
    		renderLogin();

    	}
    	
		
    });

} 


function updateLeaderboard (data){



}

function sendDataAndRenderGame(data){

	console.log("data =>",data);
	let Auth_Token = loggedInUser.auth_token;
	console.log("loggedInUser =>",loggedInUser);
	let submission = new FormData();
	submission.append('img', data.file);
	submission.append('id', loggedInUser.id);
	console.log("loggedInUser.id =>",loggedInUser.id);
	submission.append('caption', data.caption);
	console.log(submission);


	ajax({
      url: 'https://safe-ridge-87798.herokuapp.com/images',
      type: 'POST',
      data: submission,
      cache: false,
      headers: {"Auth-Token": Auth_Token},
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

// function stageGame (){

// 	let URL = "http://s3-us-west-2.amazonaws.com/bongo/images/imgs/000/000/004/original/bongo-drum.jpg?1460150499";

// 	ajax({ URL, type: 'GET' }).then( data => {

// 		console.log("data", data);

// 	render(

// 		<PlayBoard gameData={ data } onGameOver={getLeaderboardData}/>,
// 		document.querySelector('.app')
// 	);

// 	});
// }
let testData = [{"caption": "pyramids", img: "http://cdn.history.com/sites/2/2013/12/egyptian-pyramids-hero-H.jpeg"},
 {"caption": "machu picchu", img: "http://www.travelandleisure.com/sites/default/files/styles/1600x1000/public/1434385487/ATTRACTIONS0615-machu-picchu.jpg?itok=H-P-lyy8"},
 {"caption": "Petra", "img": "http://theplanetd.com/images/petra-jordan-photos-treasury.jpg"},
 {"caption": "Stonehenge", "img": "https://upload.wikimedia.org/wikipedia/commons/3/35/Stonehenge_on_27.01.08.jpg"},
 {"caption": "Golden Gate Bridge", "img": "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg"},
 {"caption": "burj khalifa", "img": "http://www.burjkhalifa.ae/en/Images/home_bg_tcm186-80501.jpg"},
 {"caption": "Crater Lake", "img": "http://www.terragalleria.com/images/np-pacific/crla80028.jpeg"}

 ];

 let shuffledGameData = _.shuffle(testData);

function stageGame (){

	render(

		<PlayBoard gameData={ shuffledGameData } onGameOver={getLeaderboardData}/>,
		document.querySelector('.app')
	);

}


// function stageGame (){

// 	let URL = "http://s3-us-west-2.amazonaws.com/bongo/images/imgs/000/000/004/original/bongo-drum.jpg?1460150499";

// 	ajax({
//       url: URL,
//       type: 'GET',
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     }).then( data => {

// 		console.log("data", data);

// 	render(

// 		<PlayBoard gameData={ data } onGameOver={getLeaderboardData}/>,
// 		document.querySelector('.app')
// 	);

// 	});
// }

// function getLeaderboardData (score){


	/////first POST request the username and score and call the GET request in the 'then' of the first request

// 	ajax({
//       url: 'https://safe-ridge-87798.herokuapp.com/users',
//       type: 'GET',
//       data: data,
//       cache: false,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     }).then( data => {
    	
//     	render(

// 		<Leaderboard leaderboardData={ data } playAgain={renderGameBoard} addImg={renderUploader} toLogout={logout}/>,
// 		document.querySelector('.app')
		
// 	);
//     });

// }

function getLeaderboardData (score){

	console.log("score =>",score);

	let finishedGameData = {

		"username": Cookies.get('username'),
		"score": score
	}

	let testLeaderboard = [ 
		{ "username": "username", "score": 55 },
		{ "username": "username2", "score": 155 },
		{ "username": "username3", "score": 5555 },
		{ "username": "username4", "score": 55 },
		{ "username": "username5", "score": 155 },
		{ "username": "username6", "score": 5555 }
	];

		function sortArray(array, key) {
	    return array.sort(function(a, b) {
	        if(a[key] < b[key]){
	            
	            return 1;
	          
	        }else if(a[key] > b[key]){
	          
	            return -1;
	          
	        }else{
	          return 0;
	        };
	    });
	}

	var sortedLeaderboard = sortArray(testLeaderboard, "score");
    	
    	render(

		<Leaderboard leaderboardData={ testLeaderboard } playAgain={renderGameBoard} addImg={renderUploader} toLogout={logout} currentGame={finishedGameData}/>,
		document.querySelector('.app')
		
	);

}

function renderLogin (){

	if (Cookies.get('username')){

		renderGameBoard ();

	}else{
		console.log(loggedInUser);
		render(

		<Login addUserFunc={addUser} logIn={logInUser}/>,
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

		<Uploader sendData={sendDataAndRenderGame} toLogout={logout} backToGame={renderGameBoard}/>,
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
	Cookies.remove('auth_token');
	Cookies.remove('id');
	renderLogin();

}

renderLogin();
// renderPlayBoard();
// renderGameBoard();
// renderUploader();
