import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18next from "i18next";
import memoize from "lodash/memoize";

const en = require("./../../../assets/locales/en.json");
const ru = require("./../../../assets/locales/ru.json");
const ua = require("./../../../assets/locales/ua.json");

export class I18N {

    constructor(){
        I18nManager.forceRTL(false);
    };

    public setLanguage(locale:string) {
        return i18next.changeLanguage(locale).then(() => {
            this.t.cache.clear(); return locale;
        });
    };

    public languages():any[] {
        return [{
            key: "en",
            label: this.t("locales.en")
        }, {
            key: "ua",
            label: this.t("locales.ua")
        }, {
            key: "ru",
            label: this.t("locales.ru")
        }]
    };

    public t = memoize(
        (key, config) => i18next.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    );

    public init():Promise<any> {
        return i18next.init({
            fallbackLng: "en",
            lng: "en",
            ns: ["translations"],
            defaultNS: "translations",
            resources: ((locales) => {
                return Object.keys(locales).reduce((res, key) => {
                    return {...res, [key]: { translations: locales[key] }}
                }, {})
            })({ en, ru, ua })
        })
    };

};

export const i18n = new I18N();