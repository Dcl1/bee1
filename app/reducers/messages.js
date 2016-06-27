import * as types from '../actions.actionTypes';

const initialState = {
	versionID: 0
};

export default function messagereducer(action = initialState, action = {}) {
	switch(action.type) {
		case types.UPDATEMESSAGELIST:
			console.log('Update Message List');
			return {
				...state,
				versionID: action.versionID
			}
		default:
			return state;
	}
}