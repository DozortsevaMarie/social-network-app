const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogues: [
		{name: "Masha", id:"1"},
		{name: "Sasha", id:"2"},
		{name: "Sveta", id:"3"},
		{name: "Dima", id:"4"},
		{name: "Misha", id:"5"},
		{name: "Oleg", id:"6"}
	],
	messages: [
		{message: "Hello!", id:"1", author: "Masha"},
		{message: "Hi! How are you?", id:"2", author: "Sasha"},
		{message: "Let's go to the park!", id:"3", author: "Sveta"},
		{message: "Happy Birthday!", id:"4", author: "Dima"},
		{message: "See you soon!", id:"5", author: "Misha"},
		{message: "Welcome to Spirit!", id:"6", author: "Oleg"}
	]
}

const dialoguesReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: '7', message: body}],
			};
		default:
			return state;
	}
}
export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});


export default dialoguesReducer;