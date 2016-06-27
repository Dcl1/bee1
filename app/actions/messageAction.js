import * as types from './actionTypes';

export function updateepisode(){
	return {
		type: types.UPDATEEPISODE
	}
}

export function updateconversation(convostep) {
	return {
		type: types.UPDATECONVERSATION,
		convostep
	}
}


export function updatemessagelist(versionID) {
	return {
		type: types.UPDATEMESSAGELIST,
		versionID
	}
}