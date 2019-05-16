import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProfileScreen } from "./profile.component";
import * as EventsScreenOperations from "./profile.operations";

export const ProfileScreenContainer = connect((state:any, props:any) => {
	return {
		...state.profile,
		locale: state.settings.locale
	}
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenOperations, dispatch)
})(ProfileScreen);