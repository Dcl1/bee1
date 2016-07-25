import * as types from '../actions/actionTypes';

export default function feedreducer(state = [], action = {}) {
	switch(action.type) {
		case types.ASKQUESTION:
			return [
				...state,
				{

				}
			];
		default:
			return state;

	}
}