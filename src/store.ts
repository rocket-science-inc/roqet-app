import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"
import * as logger from "redux-logger";

import { EventsScreenReducer } from "@/screens/events/events.reducer";
import { ProfileScreenReducer } from "@/screens/profile/profile.reducer";
import { SettingsScreenReducer } from "@/screens/settings/settings.reducer";

import { LoginModalReducer } from "@/modals/login/login.reducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const middleware = [thunk].concat(__DEV__ && typeof(logger) == "function" ? [logger] : []);

const rootReducer = combineReducers({
	events: EventsScreenReducer,
	profile: ProfileScreenReducer,
	settings: SettingsScreenReducer,
	
	login: LoginModalReducer
});

const Reducer = persistReducer({
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel2,
	blacklist: ['navigation']
}, rootReducer);

export const Store = ((enhancer) => {
	return createStore(Reducer, {}, enhancer)
})(compose(applyMiddleware(...middleware)));

export const Persistor = persistStore(Store);

if(__DEV__) Persistor.purge();