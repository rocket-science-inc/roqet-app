import React, { Component } from "react"
import { Provider, connect } from "react-redux";
import { Router } from "react-native-router-flux"
import StyleSheet from "react-native-extended-stylesheet";
import { PersistGate } from "redux-persist/integration/react";
import { i18n } from "@roqet/i18n";

import { Scenes } from "./scenes";
import { Store, Persistor } from "./store";

const ReduxRouter = connect()(Router);

StyleSheet.build();

export class Roqet extends Component<any, rct.provider.IState> {

	constructor(props){
		super(props); this.state = { initalized: false };
	};

	public componentWillMount():void {
		i18n.init().then(() => {
			this.setState(() => ({ initalized: true }));
		});
	};

	public render():JSX.Element | null {
		if (this.state.initalized) {
			return (
				<Provider store={Store}>
					<PersistGate /*loading={<Loader />}*/ persistor={Persistor}>
						<ReduxRouter scenes={Scenes} />
					</PersistGate>
				</Provider>
			)
		}; return null;
		
	};

};