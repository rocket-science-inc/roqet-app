import { TYPES } from "@/configs/types";

let initState:rct.login.IReducer = {
	loading: false,
	errors: []
};

export const LoginModalReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		case TYPES.LOGIN_ERRORS:
			return {...state, errors: payload}
		case TYPES.LOGIN_RESETED:
			return {...state, loading: false, errors: [] }
		default:
			return state
	}
};