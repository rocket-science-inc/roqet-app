import { Actions } from "react-native-router-flux";
import * as actions from "./initial.actions";
import { RctApi } from "@roqet/api";

export const init = () => {
    return (dispatch) => {
        RctApi.auth.isAuthorized().then(({google, facebook}) => {
            return (google || facebook) ? RctApi.auth.me({google, facebook}) : Promise.reject()
        }).then(user => {
            return Promise.resolve(dispatch(actions.meLoaded(user)));
        }).catch(() => {
            return Promise.resolve(dispatch(actions.meLoaded(null)));
        }).then(() => {
            Actions.reset("root");
        })
    }
};