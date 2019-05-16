import { TYPES } from "@/configs/types";

let initState:rct.login.IReducer = {};

export const LoginScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		default:
			return state
	}
};