import * as types from '../actions/actionTypes';

const initialState = {
	signed: false,
	episode: 1
};

export default function appreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.UPDATEEPISODE:
			//console.log('Updating the episode List Right Her');
			return {
				...state,
				episode: state.episode + 1
			}
		case types.SIGNIN:
			//console.log("INSIDE APP REDUCERS: SIGNIN ");
			return {
				...state,
				signed: true
			}
		default:
			return state;
	}
}