import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../langues/locales/en/en.json'),
      },
      fr: {
        translation: require('../langues/locales/fr/fr.json'),
      },
      zh: {
        translation: require('../langues/locales/zh/zh.json'),
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });





// <a class="nav-link" href="#"> 
//                                     <div id="google_translate_element">  
//                                     </div> 
//                                     <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> 
//                                    <div class="translate"> 
//                                     <script type="text/javascript"> 
//                                         function googleTranslateElementInit() { 
//                                             new google.translate.TranslateElement( 
//                                                 {pageLanguage:'en', 
//                                                 defaultLanguage:'en', 
//                                                 includedLanguages: 'en,fr', 
//                                                 layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
//                                                 autoDisplay:false, 
//                                                 multiLanguage: true 
//                                             }, 
//                                             'google_translate_element',) 
                                                 
//                                         } 
//                                     </script> 
//                                    </div> 
                                    
//                             </a>