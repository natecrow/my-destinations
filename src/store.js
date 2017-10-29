import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
})
// Runs createStore function, which returns another function that
// takes in reducer as a parameter
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
