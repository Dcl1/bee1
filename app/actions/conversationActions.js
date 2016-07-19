import * as types from './actionTypes';

export function returnconversation(convoID){
	return {
		type: types.RETURNCONVERSATION,
		convoID
	}
}