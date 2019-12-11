import { LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/constants'
const initialState = {

};

const loginReducer = (state = initialState , action) => {
    const {type, userData} = action;
    
    switch (type) {
        case LOGIN_SUCCESS:
            console.log("ALLPRODUCTS_SUCCESS in reducer",type,userData)
            return {
                ...state,
                userData
            }
        case LOGIN_FAILED:
            return action.message
        default:
            return state
    }
}
export default loginReducer;