import { TYPES } from "@/configs/types";

let initState:rct.settings.IReducer = {};

export const SettingsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		default:
			return state
	}
};