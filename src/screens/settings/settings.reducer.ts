import { TYPES } from "@/configs/types";

let initState:rct.settings.IReducer = {
	locale: "en"
};

export const SettingsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		case TYPES.LOCALE_APPLIED:
			return {...state, locale: payload}
		default:
			return state
	}
};