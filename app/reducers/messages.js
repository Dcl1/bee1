import * as types from '../actions/actionTypes';

const initialState = {
	episode: 1
};

export default function messagereducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.UPDATEMESSAGELIST:
			console.log('Update Message List Right Her');
			return {
				...state,
				episode: state.episode + 1
			}
		default:
			return state;
	}
}