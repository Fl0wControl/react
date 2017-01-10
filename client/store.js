import {createStore, compose} from 'redux'

//this allows us to hook up react router with redux
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

//actions, action creators, reducers are core concepts
import rootReducer from './reducers/index';

//set default data when application loads
import comments from './data/comments'
import posts from './data/posts'

//need to create a reducer for each piece of state
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

/*
action is something that happens- clicks, loads, deletes, add
whenever this happens, it dispatches an action, which has 2 things- type of action, and payload of information
which comment was deleted, who was author, etc- information on what happened.

every time you run an action or dispatch an action, every single reducer is going to run
and whether you choose to act on that action or not is up to the reducer

you need to write logic inside the post, to say 'if it is an action i am interested in'
then do something, otherwise return state and nothing will happen
*/