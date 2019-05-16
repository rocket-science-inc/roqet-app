import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import I18n from "i18n-js";
import memoize from "lodash/memoize";

const en = require("./../../../assets/locales/en.json");
const ru = require("./../../../assets/locales/ru.json");
const ua = require("./../../../assets/locales/ua.json");

export class I18N {

    constructor(){
        I18n.defaultLocale = "en";
        I18n.locale = "en";
        I18n.fallbacks = true;
        I18n.translations = { en, ru, ua };
        I18nManager.forceRTL(false);
    };

    public get locale():string {
        return I18n.currentLocale()
    };

    public set locale(locale:string) {
        I18n.locale = locale;
        this.t.cache.clear();
    };

    public locales():any[] {
        return [{
            key: "en",
            label: I18n.t("locales.en")
        }, {
            key: "ua",
            label: I18n.t("locales.ua")
        }, {
            key: "ru",
            label: I18n.t("locales.ru")
        }]
    };

    public t = memoize(
        (key, config) => I18n.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    );

};

export const i18n = new I18N();