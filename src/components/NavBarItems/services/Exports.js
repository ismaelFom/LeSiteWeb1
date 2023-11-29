import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';
import Btnwhatsapp from '../../Error/Btnwhatsapp';
import { useTranslation } from 'react-i18next'


const Exports = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid py-5 wow fadeInUp persobg" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle">{t('EXPORT')}</h1></center>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion">{t('Résumé Opérationnels #1')}</Accordion.Header>
            <Accordion.Body>
            {t('Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, le marketing et la vente, la logistique et les finances1.')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion">{t("Acteur de l'export-import #2")}</Accordion.Header>
            <Accordion.Body>
            {t("Il est important de comprendre les différents acteurs impliqués dans une transaction d'import-export, tels que l'importateur, l'exportateur, le commissionnaire de transport, le transporteur, le commissionnaire en douane et le transitaires.")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion">{t('Personnel qualifié #3')}</Accordion.Header>
            <Accordion.Body>
            {t('Un personnel qualifié et spécialisé dans un domaine technique spécifique et multilingue est un atout majeur.')}
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion">{t('Etude du Marché #4')}</Accordion.Header>
            <Accordion.Body>
            {t("Une étude de marché complète est essentielle pour comprendre et analyser le fonctionnement du commerce à l'échelle internationale.")}              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion">{t('Outils digitaux #5')}</Accordion.Header>
            <Accordion.Body>
            {t("Les outils digitaux peuvent aider à capter le plus de leads possibles Une étude de marché complète est essentielle pour comprendre et analyser le fonctionnement du commerce à l'échelle internationale.")}              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Btnwhatsapp />
      </div>
    </div>
  )
}

export default Exports;
