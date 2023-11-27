import { useTranslation } from 'react-i18next';
  const { t } = useTranslation();
{t('Welcome')}

const ChangeLanguages = () => {
  const { t } = useTranslation();

  return <h1>{t('Welcome to React Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, le marketing et la vente, la logistique et les finances1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}</h1>;
}


export default ChangeLanguages;