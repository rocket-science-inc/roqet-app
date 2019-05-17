import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InitialScreen } from "./initial.component";
import * as EventsScreenOperations from "./initial.operations";

export const InitialScreenContainer = connect((state:any, props:any) => {
	return {
		...state.profile,
		locale: state.settings.locale
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenOperations, dispatch)
})(InitialScreen);