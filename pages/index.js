
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import App from '../containers/App';
import {contactFormReducers} from '../reduxCategories/contactForm/contactFormReducers';
import {cartReducers} from '../reduxCategories/cart/cartReducers';
import {playSongReducers} from '../reduxCategories/playSong/playSongReducers';
import {popupReducers} from '../reduxCategories/popups/popupReducers';

const logger = createLogger();

const rootReducer = combineReducers({
    cartReducers, 
    contactFormReducers, 
    playSongReducers, 
    popupReducers
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));



export default class index extends React.Component {
    render(){return(
        <Provider store={store}>
            <App />
        </Provider>
    )}
}

