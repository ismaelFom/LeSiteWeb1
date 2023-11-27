import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';
import Btnwhatsapp from '../../Error/Btnwhatsapp';



const Negoces = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp persobg" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle">NEGOCE</h1></center>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion accordion-button">Transport #1</Accordion.Header>
            <Accordion.Body>
            Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, le marketing et la vente, la logistique et les finances1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion accordion-button">Logistique #2</Accordion.Header>
            <Accordion.Body>
            Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, le marketing et la vente, la logistique et les finances1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion accordion-button">Douane #3</Accordion.Header>
            <Accordion.Body>
            Il donne une vue d’ensemble claire et concise de l’entreprise et de ses objectifs, en abordant les questions clés telles que la gestion de la chaîne d’approvisionnement, le marketing et la vente, la logistique et les finances1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Btnwhatsapp />
      </div>
    </div>
  )
}

export default Negoces;
