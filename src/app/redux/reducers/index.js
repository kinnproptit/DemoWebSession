import { combineReducers } from 'redux'

import homeReducer from './home'
import socketSentenceReducer from './meeting-socket'

export default combineReducers({ 
                                homeReducer, 
                                socketSentenceReducer 
                            })
