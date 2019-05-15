import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LanguageModal } from "./language.component";
import * as EventsScreenOperations from "./language.operations";

export const LanguageModalContainer = connect((state:any, props:any) => {
	return state.settings
}, (dispatch:any) => {
	return bindActionCreators(EventsScreenOperations, dispatch)
})(LanguageModal);