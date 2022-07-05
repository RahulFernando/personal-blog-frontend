import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootRedcuer from '../reducers';
import rootSaga from '../sagas';

const appReducer = combineReducers(rootRedcuer);

export default function storeConfiguration() {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const { run: runSaga } = sagaMiddleware;
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: appReducer,
        middleware: [...middlewares],
        devTools: process.env.NODE_ENV !== 'production',
    })
    
    runSaga(rootSaga);
    
    return store;
};