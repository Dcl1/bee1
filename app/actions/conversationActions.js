import * as types from './actionTypes';

export function returnconversation(option, user, text, position){
	return {
		type: types.RETURNCONVERSATION,
		option,
		user,
		text,
		position
	}
}

export function clearconversation(){
	return {
		type: types.CLEARCONVERSATION
	}
}