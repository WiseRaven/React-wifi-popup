import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";
import common_de from "./translations/de/common.json";
import common_cn from "./translations/cn/common.json";

i18next.init({
    interpolation: { escapeValue: false },  
        lng: 'ru',                              
        resources: {
            ru: {
                common: common_ru               
            },
            en: {
                common: common_en               
            },
            de: {
                common: common_de
            },
            cn: {
                common: common_cn
            },
        },
});


ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
