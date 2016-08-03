import * as types from '../actions/actionTypes';

var simpleStore = require('react-native-simple-store');



function getKey(Epi, Cid){
	//console.log("THIS IS WORK STORE " + "E" + Epi + " " + "CID" + Cid);

	var msgKey = String("E" + Epi + "CID" + Cid);
	var msgVar = this[msgKey];

	console.log("Work Message Key " + msgKey);
	//console.log(typeof(msgVar));

	return msgKey;

	// simpleStore.save( msgKey, {
	// 	step: 3
	// })
	// .then(() => simpleStore.get(msgKey))
	// .then( msgVar => {
	// 	//console.log( msgVar.step );

	// })

}


function getStep(key){

	var msgVar = this[key];

	simpleStore.save( key, {
		step: 3
	})
	.then(() => simpleStore.get(key))
	.then( msgVar => {
		console.log("See the step " + msgVar.step)
	})

}



const initialState = {
	currStep: 0,
	messages: []
};


export default function conversationreducer(state = initialState, action = {}) {

	var CurrentKey;

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
		case types.INITIALSTEPRETURN:

			console.log("WAIT WAIT we are inside INITIALSTEPRETURN ")

			return {
				...state,
				currStep: state.currStep
			};
		case types.SETCURRENTSTEP:
			//console.log("Setting the current step " + action.stepp);
			return {
				...state,
				currStep: action.stepp
			};
		case types.SETKEY:
		 	CurrentKey	 =	getKey(action.Episode, action.Convoid);
		 	console.log(CurrentKey);
		
		default:
			return state;
	}
}

 




















