import * as types from './actionTypes';

export function askquestion(questionID){
	return {
		type: types.ASKQUESTION,
		questionID
	}
}