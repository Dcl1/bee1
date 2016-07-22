import * as types from './actionTypes';

export function returnconversation(option, user, text){
	return {
		type: types.RETURNCONVERSATION,
		option,
		user,
		text
	}
}

export function clearconversation(){
	return {
		type: types.CLEARCONVERSATION
	}
}