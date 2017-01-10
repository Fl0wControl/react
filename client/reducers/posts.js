/* a reducer takes in 2 things
 1- the action (info of what happened)
 2 - copy of the current state

 here is what happened, here is the store
 ok let me see
 return an updated copy of the store
 */

function posts(state = [], action){
	console.log("the post will change")
	console.log(state,action)
	return state;
}

export default posts