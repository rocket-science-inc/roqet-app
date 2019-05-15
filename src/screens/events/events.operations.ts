import * as actions from "./events.actions";
import { RctApi } from "@roqet/api";

let QueryEvent = {
    total: true,
    pages: true,
    records: {
        id: true,
        title: true,
        image: {
            public_id: true,
            format: true
        }
    }
}

export const loadEvents = (params:rct.api.IEventQueryParams) => {
    return (dispatch) => {
        Promise.resolve(dispatch(actions.loading(true)))
            .then(() => RctApi.event.query(params, QueryEvent))
            .then(({events}) => dispatch(actions.evetsLoaded(events)))
            .then(() => dispatch(actions.loading(false)))
            .catch(console.error)
    }
};