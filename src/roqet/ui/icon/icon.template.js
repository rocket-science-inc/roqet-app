/**
 * Roqet icon set component.
 * Usage: <Roqet name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  "check": 61697,
  "chevron-left": 61698,
  "chevron-right": 61699,
  "facebook": 61700,
  "globe": 61701,
  "home": 61702,
  "ios-checkmark": 61703,
  "md-radio-button-off": 61704,
  "md-radio-button-on": 61705,
  "settings": 61706,
  "user": 61707,
  "x": 61708
};

const iconSet = createIconSet(glyphMap, 'Roqet', 'Roqet.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
