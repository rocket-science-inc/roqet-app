import React from "react";
import { Actions, Scene, Modal } from "react-native-router-flux";
import { Icon } from "@roqet/ui";

import { EventsScreenContainer } from "@/screens/events/events.container";
import { ProfileScreenContainer } from "@/screens/profile/profile.container";
import { SettingsScreenContainer } from "./screens/settings/settings.container";

import { LanguageModalContainer } from "@/modals/language/language.container";

export const Scenes = Actions.create(
	<Modal hideNavBar>
		<Scene key="root">
			<Scene key="main" hideNavBar tabs={true} showLabel={false} lazy={false}>
				<Scene hideNavBar 
					key="main.home"
					icon={() => <Icon name="home" size={22} />}
					component={EventsScreenContainer}
				/>
			</Scene>
			<Scene hideNavBar
				key="profile"
				component={ProfileScreenContainer}
			></Scene>
			<Scene hideNavBar initial
				key="settings"
				component={SettingsScreenContainer}
			></Scene>
		</Scene>
		<Scene hideNavBar
			key="language"
			component={LanguageModalContainer}
		></Scene>
	</Modal>
)