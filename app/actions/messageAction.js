import * as types from './actionTypes';

export function updatemessagelist(user, convoID, text){
	return {
		type: types.UPDATEMESSAGELIST,
		user,
		convoID,
		text
	}
}

export function clearmessagelist(){
	return {
		type: types.CLEARMESSAGELIST
	}
}