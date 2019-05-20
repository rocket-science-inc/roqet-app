import { TYPES } from "@/configs/types";

let initState:rct.login.IReducer = {
	loading: false
};

export const LoginModalReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		default:
			return state
	}
};