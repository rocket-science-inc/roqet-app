import { TYPES } from "@/configs/types";

let initState:rct.profile.IReducer = {
	me: null
};

export const ProfileScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.ME_LOADED:
			return {...state, me: payload}
		case TYPES.LOADING:
			return {...state, loading: payload}
		default:
			return state
	}
};