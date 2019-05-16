import { TYPES } from "@/configs/types";
import { defaultLang } from "@roqet/i18n";

let initState:rct.settings.IReducer = {
	locale: defaultLang.languageTag
};

export const SettingsScreenReducer = (state:any = initState, {type, payload}:any) => {
	switch (type) {
		case TYPES.LOADING:
			return {...state, loading: payload}
		case TYPES.LOCALE_APPLIED:
			return {...state, locale: payload}
		default:
			return state
	}
};