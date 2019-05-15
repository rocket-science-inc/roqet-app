import { TYPES } from "@/configs/types";

export const loading = (loading) => ({
    type: TYPES.LOADING,
	payload: loading
});

export const evetsLoaded = (events) => ({
	type: TYPES.EVENTS_LOADED,
	payload: events
});