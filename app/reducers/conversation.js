import * as types from '../actions/actionTypes';

const initialState = {
	currStep: 0,
	messages: []
};

var simpleStore = require('react-native-simple-store');


function getStep(key, defaultStep){

	//console.log("TYPE OF CHECK: " + typeof key);
	var value;

	checkStore(key, returnStep)

	function checkStore(k, callback){

		var msgVar = this[k];

		simpleStore.get(k)
		.then( (msgVar) => {
			console.log(msgVar == null);
			callback(msgVar == null);
		});

		//return true; 
	}

	function returnStep( truth ){
		if( truth ) {
			// if checkStore returns false, no store. Then create a store
			var msgVar = this[key];

			simpleStore.save( key, {
				step: defaultStep
			})
			.then(() => simpleStore.get( key ))
			.then( msgVar => {
				console.log("NO store: APPARENTLY THE STEP IS " + msgVar.step);
				return msgVar.step;
			})
			.catch(error => {
				console.log(error.message)
			});
		} else {
			console.log("THERE APPEARS TO BE A STORE");

			var msgVar = this[key]

			simpleStore.get( key )
			.then( msgVar => {
				var theStep = msgVar.step;
				console.log("Yes store: APPARENTLY THE STEP IS " + theStep);
				return theStep;
			})
			.catch(error => {
				console.log(error.message)
			});
		}
	}

	//console.log( checkStore(key) );
	//console.log("Inside getStep: We are now playing this game " + key + " " + defaultStep);



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
		case types.SETSTEP:

			var defaultStep = action.defaultStep;
			var key = action.key;

			checkStore(action.key, returnStep)

			function checkStore(k, callback){

				var msgVar = this[k];

				simpleStore.get(k)
				.then( (msgVar) => {
					console.log(msgVar == null);
					callback(msgVar == null);
				});

				//return true; 
			}

			function returnStep( truth ){
				if( truth ) {
					// if checkStore returns false, no store. Then create a store
					var msgVar = this[key];

					simpleStore.save( key, {
						step: defaultStep
					})
					.then(() => simpleStore.get( key ))
					.then( msgVar => {
						console.log("NO store: APPARENTLY THE STEP IS " + msgVar.step);
						return {
							...state,
							currStep: msgVar.step
						};
						//return msgVar.step;
					})
					.catch(error => {
						console.log(error.message)
					});
				} else {
					console.log("THERE APPEARS TO BE A STORE");

					var msgVar = this[key]

					simpleStore.get( key )
					.then( msgVar => {
						var theStep = msgVar.step;
						console.log("Yes store: APPARENTLY THE STEP IS " + theStep);
						return {
							...state,
							currStep: theStep
						};

						//return theStep;
					})
					.catch(error => {
						console.log(error.message)
					});
				}
			}
							

		default:
			return state;
	}
}















