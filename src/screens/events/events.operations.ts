import * as actions from "./events.actions";
// import { $events, IQueryArgs } from "@api/events";

export interface IEventsScreenOperations {
    getEvents(args:any): void
}

export const getEvents = (args:any) => {
    return (dispatch) => {
        // Promise.resolve(dispatch(actions.loading(true)))
        //     .then(() => $events.query(args))
        //     .then((conversations) => dispatch(actions.evetsLoaded(conversations)))
        //     .then(() => dispatch(actions.loading(false)))
        //     .catch(console.log)
    }
};