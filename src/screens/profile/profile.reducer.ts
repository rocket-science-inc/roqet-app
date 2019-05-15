import { TYPES } from "@/configs/types";

let initState:rct.profile.IReducer = {};

export const ProfileScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		default:
			return state
	}
};