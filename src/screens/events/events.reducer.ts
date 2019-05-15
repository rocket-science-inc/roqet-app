import { TYPES } from "@/configs/types";

let initState:rct.events.IReducer = {
	loading: false,
	total: 0,
	page: 0,
	pages: 0,
	records: []
};

export const EventsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
        case TYPES.EVENTS_LOADED:
            return {...state, ...{
				records: [...state.records, ...payload.records],
				total: payload.total,
				pages: payload.pages
			}}
		default:
			return state
	}
};