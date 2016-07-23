import * as types from './actionTypes';

export function returnconversation(option, user, text, position, uniqueId){
	return {
		type: types.RETURNCONVERSATION,
		option,
		user,
		text,
		position,
		uniqueId
	}
}

export function clearconversation(){
	return {
		type: types.CLEARCONVERSATION
	}
}