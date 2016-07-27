import * as types from './actionTypes';
import * as firebase from 'firebase';

import FbApp from '../firebase/fbApp';

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();




// function geturl(med, callback) {

// 	var mediaRef = storageRef.child(med);

// 	mediaRef.getDownloadURL().then(function(url){
// 		callback(url);
// 	});

// }

// function writeData(myData) {
// 	console.log("This is my myData " + myData);
// }






export function callarray(user, mediatype, postid, caption, media){


	return{
		type: types.CALLARRAY,
		user,
		mediatype,
		postid,
		caption,
		url: media

	}
}


export function askquestion(questionID){
	return {
		type: types.ASKQUESTION,
		questionID
	}
}