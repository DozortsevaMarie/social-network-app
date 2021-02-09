const ADD_POST = "ADD_POST";

let initialState = {
	posts: [],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 8,
				message: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		default:
			return {
				...state
			}
	}
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});


export default profileReducer;
