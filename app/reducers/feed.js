import * as types from '../actions/actionTypes';

export default function feedreducer(state = [], action = {}) {
	switch(action.type) {
		case types.ASKQUESTION:
			return [
				...state,
				{

				}
			];
		case types.CALLARRAY:
			return [
				...state,
				{
					user: action.user,
					mediatype: action.mediatype,
					postid: action.postid,
					caption: action.caption,
					url: action.url
				}
			];
		default:
			return state;

	}
}