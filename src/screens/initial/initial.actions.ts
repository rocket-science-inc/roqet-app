import { TYPES } from "@/configs/types";

export const meLoaded = (user:any) => ({
    type: TYPES.ME_LOADED,
	payload: user
});