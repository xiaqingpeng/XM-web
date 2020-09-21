import {combineReducers} from 'redux'
import form from './reducers/reducerForm'
import router from './reducers/reducerRouter'
import header from '../../src/view/Header/redux/reducer'
import user from '../../src/view/UserManage/redux/reducer'
export default combineReducers({
    form,router,header,user
})
