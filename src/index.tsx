import React from 'react';
import ReactDOM from 'react-dom';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
import { store } from "store";
import { Provider } from "react-redux";
import i18next from 'i18next';
import App from './App';
import 'assets/scss/main.scss';
import es from 'i18n/locales/es.json';
import en from 'i18n/locales/en.json';

const lng = localStorage.getItem("lng") || 'en';

i18next.use(LanguageDetector).init({
	interpolation: { escapeValue: false },
	compatibilityJSON: 'v3',
	lng: `${lng}`,
	resources: {
		es: {
			global: es
		},
		en: {
			global: en
		}
	}
});

ReactDOM.render(
	<I18nextProvider i18n={i18next}>
		<Provider store={store}>
			<App />
		</Provider>
	</I18nextProvider>,
	document.getElementById('root')
);
