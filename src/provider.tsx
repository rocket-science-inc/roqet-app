import React, { Component } from "react"
import { Provider, connect } from "react-redux";
import { Router } from "react-native-router-flux"
import { PersistGate } from "redux-persist/integration/react";
import { i18n } from "@roqet/i18n";

import { Scenes } from "./scenes";
import { Store, Persistor } from "./store";

const ReduxRouter = connect()(Router);

export class Roqet extends Component {

	constructor(props){
		super(props);
	};

	public componentWillMount():void {
		i18n.init();
	};

	public render():JSX.Element {
		return (
			<Provider store={Store}>
				<PersistGate /*loading={<Loader />}*/ persistor={Persistor}>
					<ReduxRouter scenes={Scenes} />
				</PersistGate>
			</Provider>
		)
	};

};