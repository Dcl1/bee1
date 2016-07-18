import * as types from './actionTypes';

export function updatelist(episode) {
	return {
		type: types.UPDATEMESSAGELIST,
		episode
	}
}
