import * as actions from "./login.actions";
import { RctApi } from "@roqet/api";

export const loginWithFacebook = () => {
    return (dispatch) => {
        return Promise.resolve(dispatch(actions.loading(true)))
            .then(() => RctApi.auth.facebook())
            .then(() => RctApi.auth.me({facebook: true}))
            .then((me) => dispatch(actions.meLoaded(me)))
            .then(() => (dispatch(actions.loading(false))))
    }
};

export const loginWithGoogle = () => {
    return (dispatch) => {
        return Promise.resolve(dispatch(actions.loading(true)))
            .then(() => RctApi.auth.google())
            .then(() => RctApi.auth.me({google: true}))
            .then((me) => dispatch(actions.meLoaded(me)))
            .then(() => (dispatch(actions.loading(false))))
    }
};