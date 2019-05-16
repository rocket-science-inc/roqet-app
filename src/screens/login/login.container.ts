import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginScreen } from "./login.component";
import * as Operations from "./login.operations";

export const LoginScreenContainer = connect((state:any, props:any) => {
	return {
		...state.profile,
		locale: state.settings.locale
	}
}, (dispatch:any) => {
	return bindActionCreators(Operations, dispatch)
})(LoginScreen);