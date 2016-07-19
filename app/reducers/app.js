import * as types from '../actions/actionTypes';

const initialState = {
	episode: 1
};

export default function appreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.UPDATEEPISODE:
			console.log('Updating the episode List Right Her');
			return {
				...state,
				episode: state.episode + 1
			}
		default:
			return state;
	}
}