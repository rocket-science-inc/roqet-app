import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"
import * as logger from "redux-logger";

// import { HomeScreenReducer } from "./screens/main/home/home.reducer";
// import { CheckinScreenReducer } from "./screens/main/checkin/checkin.reducer";
// import { ProfileScreenReducer } from "./screens/main/profile/profile.reducer";
// import { ChatsScreenReducer } from "./screens/chats/chats.reducer";
// import { NotificationsScreenReducer } from "./screens/notifications/notifications.reducer";
// import { EventsScreenReducer } from "./screens/events/events.reducer";
// import { EventsFiltersModalReducer} from "./modals/events-filters/events.filters.reducer";
// import { EventScreenReducer } from "./screens/event/event.reducer";

import { EventsScreenReducer } from "@/screens/events/events.reducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const middleware = [thunk].concat(__DEV__ && typeof(logger) == "function" ? [logger] : []);

const rootReducer = combineReducers({
	events: EventsScreenReducer
	// home: HomeScreenReducer,
	// checkin: CheckinScreenReducer,
	// profile: ProfileScreenReducer,
	// chats: ChatsScreenReducer,
	// notifications: NotificationsScreenReducer,
	// events: EventsScreenReducer,
	// event: EventScreenReducer,
	// eventsFilters: EventsFiltersModalReducer
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

/* Uncomment to purge store */
Persistor.purge()