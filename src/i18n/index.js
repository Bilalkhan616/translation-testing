import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

const resources = {
    // en: {
    //     translation: {
    //         'Hi': 'Hi, How are you?',
    //         'How you doing' : 'How are you doing?', 
    //     },
    // },

    ar: {
        translation: {
            'Hi': 'مرحبا',
            'How are you doing ?': 'كيف هي احوالك',
            'Testing Rows': 'صفوف الاختبار',
            'column 1': 'عمودي واحد',
            'column 2': 'عمودي إثنان',
            'column 3': ' عمودي ثلاثة',
            'testing input': 'إدخال الاختبار',
            'to inner screen': 'للشاشة الداخلية',
            'change language': 'تغيير اللغة'

        },
    },
};

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: I18nManager.isRTL ? 'ar' : 'en',

        keySeparator: false, //we dont use keys in form messages.welcome

        interpolation: {
            escapeValue: false, //react already saves from xss
        },
    });

export default i18next;