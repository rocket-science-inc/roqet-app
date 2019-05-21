import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginModal } from "./login.component";
import * as Operations from "./login.operations";

export const LoginModalContainer = connect((state:any, props:any) => {
	return state.login
}, (dispatch:any) => {
	return bindActionCreators(Operations, dispatch)
})(LoginModal);