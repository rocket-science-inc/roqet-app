import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventsScreen } from "./events.component";
import * as EventsScreenOperations from "./events.operations";

export const EventsScreenContainer = connect((state:any, props:any) => {
	return state.events
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenOperations, dispatch)
})(EventsScreen);