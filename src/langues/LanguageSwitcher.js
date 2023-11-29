import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import photo_ag from '../img/photo_ag.png'
import photo_fr from '../img/photo_fr.png'
import photo_ch from '../img/photo_ch.png'
import '../style/pages.css'

const LanguageSwitcher = () => {


  const languageOptions = [
    { value: 'en', label: 'English', flag: photo_ag },
    { value: 'fr', label: 'Français', flag: photo_fr },
    { value: 'zh', label: '中文', flag: photo_ch },
  ];
  
  const CustomOption = ({ data, ...props }) => (
    <div {...props} className="custom-option">
      <img src={data.flag} alt={`${data.label} flag`} width="20" /> {data.label}
    </div>
  );
  
    const { i18n } = useTranslation();
  
    const changeLanguage = (option) => {
      i18n.changeLanguage(option.value);
    };

  return (
    <div >
      <Select
        options={languageOptions}
        isSearchable={false}
        onChange={changeLanguage}
        components={{ Option: CustomOption }}
        className="select-component"
      />
    </div>
  );
}

export default LanguageSwitcher;





































// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('fr')}>Français</button>
//       <button onClick={() => changeLanguage('zh')}>中文</button>
//     </div>
//   );
// }

// export default LanguageSwitcher;
