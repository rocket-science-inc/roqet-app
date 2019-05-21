import { TYPES } from "@/configs/types";

export const loading = (loading) => ({
    type: TYPES.LOADING,
	payload: loading
});

export const errors = (errors) => ({
    type: TYPES.LOGIN_ERRORS,
	payload: errors
});

export const meLoaded = (user:any) => ({
    type: TYPES.ME_LOADED,
	payload: user
});

export const reset = () => ({
    type: TYPES.LOGIN_RESETED
});