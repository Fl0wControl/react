//increment
export function increment(index){
	return{
		type:'INCREMENT_LIKES',
		index: index
	}
}
//add comment
export function addCommnet(postId, author, comment){
	return{
		type:'ADD_COMMENT',
		postId, author, comment
	}
}
//remove comment
export function removeComment(postId, index){
	return{
		type:'REMOVE_COMMENT',
		postId, index
	}
}

/*
how do i get state to get to main? in regular react, we pass it down every level
via props until you get what you want. redux has something called connect
and it allows you to inject the data at whatever level you need it and you can pass
it down, and connect at whatever level you need the data
 */
