import * as types from './actionTypes';

export function updatemessagelist(user, convoID, text){
	return {
		type: types.UPDATEMESSAGELIST,
		user,
		convoID,
		text
	}
}