import * as types from './actionTypes';

import FeedOne from '../data/epiOne/feed/feed.json';

function geturl(media) {
	//console.log("Getting a url");
	return 'https://facebook.github.io/react/img/logo_og.png';
}


export function callarray(user, mediatype, postid, caption, media){
	//console.log(user + " " + postid);
	return{
		type: types.CALLARRAY,
		user,
		mediatype,
		postid,
		caption,
		url: geturl(media)

	}
}


export function askquestion(questionID){
	return {
		type: types.ASKQUESTION,
		questionID
	}
}