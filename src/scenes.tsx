import React from "react";
import { Actions, Scene, Modal } from "react-native-router-flux";
import { Icon } from "@roqet/ui";

import { InitialScreenContainer } from "@/screens/initial/initial.container";
import { EventsScreenContainer } from "@/screens/events/events.container";
import { ProfileScreenContainer } from "@/screens/profile/profile.container";
import { SettingsScreenContainer } from "./screens/settings/settings.container";
import { LoginScreenContainer } from "@/screens/login/login.container";

import { LanguageModalContainer } from "@/modals/language/language.container";

export const Scenes = Actions.create(
	<Modal hideNavBar>
		<Scene hideNavBar initial
			key="initial"
			component={InitialScreenContainer}
		></Scene>
		<Scene key="root">
			<Scene key="main" hideNavBar tabs={true} showLabel={false} lazy={false}>
				<Scene hideNavBar 
					key="main.home"
					icon={() => <Icon name="home" style={{fontSize: 24}} />}
					component={EventsScreenContainer}
				/>
			</Scene>
			<Scene hideNavBar
				key="profile"
				component={ProfileScreenContainer}
			></Scene>
			<Scene hideNavBar
				key="settings"
				component={SettingsScreenContainer}
			></Scene>
			<Scene hideNavBar
				key="login"
				component={LoginScreenContainer}
			></Scene>
		</Scene>
		<Scene hideNavBar
			key="language"
			component={LanguageModalContainer}
		></Scene>
	</Modal>
)