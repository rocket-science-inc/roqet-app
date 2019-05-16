import { i18n } from "@roqet/i18n";
import * as actions from "./language.actions";

export const applyLocale = (locale:string) => {
    return (dispatch) => {
        i18n.setLanguage(locale).then(locale => {
            dispatch(actions.localeApplied(locale))
        });
    }
};