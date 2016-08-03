import * as types from '../actions/actionTypes';

var simpleStore = require('react-native-simple-store');

const initialState = {
	currStep: 0,
	messages: []
};

function workStore(Epi, Cid){
	//console.log("THIS IS WORK STORE " + "E" + Epi + " " + "CID" + Cid);

	var msgKey = String("E" + Epi + "CID" + Cid);
	var msgVar = this[msgKey];

	console.log("Work Message Key " + msgKey);
	//console.log(typeof(msgVar));

	simpleStore.save( msgKey, {
		step: 3
	})
	.then(() => simpleStore.get(msgKey))
	.then( msgVar => {
		console.log( msgVar.step );
	})

}


export default function conversationreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.RETURNCONVERSATION:
			return {
				...state,
				messages: [
					...state.messages,
					{
						option: action.option,
						user: action.user,
						text: action.text,
						uniqueId: action.uniqueID,
						position: action.position,
						uniqueId: action.uniqueId
					}

				]
			};
		case types.INCREASESTEP:
			
			workStore();

			return {
				...state,
				currStep: state.currStep += 1
			};
		case types.CLEARCONVERSATION:
			//console.log("The conversation was cleared");
			return {
				...state,
				messages: []
			};
		case types.SETCURRENTSTEP:
			//console.log("Setting the current step " + action.stepp);
			return {
				...state,
				currStep: action.stepp
			};
		case types.SETKEY:
			workStore(action.Episode, action.Convoid);
		default:
			return state;
	}
}






















