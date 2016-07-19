import * as types from '../actions/actionTypes';

const initialState = {
	convoID: 0,
	step: 0
};

export default function conversationreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.RETURNCONVERSATION:
			return {
				...state,
				convoID: state.convoID,
				step: state.step + 1
			}
		default:
			return state;
	}
}