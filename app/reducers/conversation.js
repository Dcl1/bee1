import * as types from '../actions.actionTypes';


const initialState = {
	convostep: 0
};

export default function conversationreducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.UPDATECONVERSATION:
			return {
				...state,
				convostep: action.convostep
			}
		default:
			return state;
	}
}