import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator'
import Main from './Main'

//two functions which take
const App=connect(mapStateToProps, mapDispatchToProps)