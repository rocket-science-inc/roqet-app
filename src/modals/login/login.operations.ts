import * as actions from "./login.actions";
import { RctApi } from "@roqet/api";

export const login = (provider:string) => {
    return (dispatch) => {
        return Promise.resolve(dispatch(actions.loading(true)))
            .then(():any => {
                if (provider == "facebook") {
                    return RctApi.auth.facebook().then(() => ({facebook: true}))
                } else if (provider == "google") {
                    return RctApi.auth.google().then(() => ({google: true}))
                }
            })
            .then((provider) => RctApi.auth.me(provider))
            .then((me) => dispatch(actions.meLoaded(me)))
            .then(() => dispatch(actions.loading(false)))
            .catch(({ errors }) => {
                dispatch(actions.errors(errors));
                dispatch(actions.loading(false));
                return Promise.resolve(false);
            })
    }
};

export const reset = () => {
    return (dispatch) => {
        dispatch(actions.reset());
    }
};