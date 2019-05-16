import { TYPES } from "@/configs/types";

export const localeApplied = (locale:string) => ({
	type: TYPES.LOCALE_APPLIED,
	payload: locale
});