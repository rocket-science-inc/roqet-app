import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18next from "i18next";
import memoize from "lodash/memoize";
import AsyncStorage,  {} from "@react-native-community/async-storage";

export class I18N {

    private translations:any = {
        en: require("./../../../assets/locales/en.json"),
        ru: require("./../../../assets/locales/ru.json"),
        ua: require("./../../../assets/locales/ua.json")
    };

    private lngs: string[] = Object.keys(this.translations);

    private getLocale():Promise<any> {
        return AsyncStorage.getItem("persist:root").then(root => {
            return root ? JSON.parse(root) : Promise.reject();
        }).then(({ settings }) => {
            return {
                languageTag: JSON.parse(settings).locale,
                isRTL: false
            }
        }).catch(() => {
            return Promise.resolve(RNLocalize.findBestAvailableLanguage(this.lngs))
        })
    };

    private i18nextInit({ languageTag, isRTL }):Promise<any> {
        return Promise.resolve(I18nManager.forceRTL(isRTL)).then(() => {
            return i18next.init({
                fallbackLng: "en",
                lng: languageTag,
                ns: ["translations"],
                defaultNS: "translations",
                resources: ((locales) => {
                    return Object.keys(locales).reduce((res, key) => {
                        return {...res, [key]: { translations: locales[key] }}
                    }, {})
                })(this.translations)
            })
        })
    };

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
        return this.getLocale()
            .then(this.i18nextInit.bind(this))
    };

};

export const i18n = new I18N();