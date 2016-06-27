import * as types from '../actions/actionTypes';

const initialState = {
	episode: 1
};

export default function feedreducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.UPDATEEPISODE:
			console.log('Update Episode');
			return {
				...state,
				episode: action.episode
			}
		default:
			return state;
	}
}