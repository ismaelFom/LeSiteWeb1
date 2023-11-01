import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';

const Exports = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp persobg" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle">EXPORT</h1></center>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion accordion-button">Résumé Opérationnels #1</Accordion.Header>
            <Accordion.Body>
              Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, 
              en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, 
              le marketing et la vente, la logistique et les finances1
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion accordion-button">Acteur de l'export-import #2</Accordion.Header>
            <Accordion.Body>
              Il est important de comprendre les différents acteurs impliqués dans une transaction d'import-export, 
              tels que l'importateur, l'exportateur, le commissionnaire de transport, le transporteur, 
              le commissionnaire en douane et le transitaire²
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion accordion-button">Personnel qualifié #3</Accordion.Header>
            <Accordion.Body>
              Un personnel qualifié et spécialisé dans un domaine technique spécifique et 
              multilingue est un atout majeur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion accordion-button">Etude du Marché #4</Accordion.Header>
            <Accordion.Body>
              Une étude de marché complète est essentielle pour comprendre et 
              analyser le fonctionnement du commerce à l'échelle internationale.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion accordion-button">Outils digitaux #5</Accordion.Header>
            <Accordion.Body>
              Les outils digitaux peuvent aider à capter le plus de leads possibles
              Une étude de marché complète est essentielle pour comprendre et 
              analyser le fonctionnement du commerce à l'échelle internationale.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default Exports;
