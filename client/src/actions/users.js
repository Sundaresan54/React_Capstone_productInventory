import * as services from '../services/index';

import {LOGIN_SUCCESS,LOGIN_FAILED} from '../constants/constants.js'


export function login(userId,password) {
   return dispatch => {

      services.loginCall(userId,password)
         .then(userData => {
            dispatch(loginSuccess(userData), console.log("called in action",userData))
         }
)
         .catch(e => {
            dispatch(loginFail(e.message))
            console.log(e.message)
         })

   }
}

function loginSuccess(userData) { return { type: LOGIN_SUCCESS, userData } }
function loginFail(message) { return { type: LOGIN_FAILED, message } }