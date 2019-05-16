import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SettingsScreen } from "./settings.component";
import * as EventsScreenOperations from "./settings.operations";

export const SettingsScreenContainer = connect((state:any, props:any) => {
	return state.settings
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenOperations, dispatch)
})(SettingsScreen);