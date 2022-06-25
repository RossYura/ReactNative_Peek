import i18n, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import 'moment/locale/de';

import de from './de.json';
import moment from 'moment';
import {LocaleConfig} from 'react-native-calendars';

const languages = [{translation: de, languageTag: 'de'}];

const fallback = {languageTag: 'de', isRTL: false};

const {languageTag} =
  RNLocalize.findBestAvailableLanguage(
    languages.map(({languageTag: lt}) => lt),
  ) || fallback;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: languages.reduce((acc, {languageTag: lt, translation}) => {
      acc[lt] = {translation};
      return acc;
    }, {} as Resource),

    lng: languageTag,

    interpolation: {
      escapeValue: false,
    },
  });

moment.locale(languageTag);

LocaleConfig.locales[languageTag] = {
  monthNames: moment.localeData().months(),
  monthNamesShort: moment.localeData().monthsShort(),
  dayNames: moment.localeData().weekdays(),
  dayNamesShort: moment.localeData().weekdaysMin(),
  today: '',
};

LocaleConfig.defaultLocale = languageTag;

export default i18n;
