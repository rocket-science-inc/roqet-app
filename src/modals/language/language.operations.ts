import { i18n } from "@roqet/i18n";
import * as actions from "./language.actions";

export const applyLocale = (locale:string) => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.localeApplied(locale)))
            .then(({ payload }) => {
                return i18n.locale = payload
            })
    }
};