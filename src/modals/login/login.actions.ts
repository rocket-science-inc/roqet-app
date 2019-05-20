import { TYPES } from "@/configs/types";

export const loading = (loading) => ({
    type: TYPES.LOADING,
	payload: loading
});

export const meLoaded = (user:any) => ({
    type: TYPES.ME_LOADED,
	payload: user
});