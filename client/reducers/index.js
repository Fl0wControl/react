/*
you can only have 1 reducer. you create multiple reducers for each state,
and put them into the root reducer which handles it from there
 */

import{ combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import posts from './posts'
import comments from './comments'

//post the items that live in state, plus the router which holds the changes
const rootReducer = combineReducers({posts, comments, routing:routerReducer})

export default rootReducer;