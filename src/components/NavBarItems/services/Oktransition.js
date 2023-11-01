import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';

const Oktransits = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp persobg" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle"> TRANSIT </h1></center>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion">transit</Accordion.Header>
            <Accordion.Body>
            Le transit est une opération commerciale qui consiste à faire passer des marchandises à travers
             un pays ou une zone douanière en route vers une destination finale, sans que ces marchandises
              ne soient soumises aux droits de douane, aux taxes ou aux autres réglementations douanières
               du pays de transit. Voici quelques informations détaillées sur le transit :
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion">Types de transit</Accordion.Header>
            <Accordion.Body>
             - Transit interne : Les marchandises sont en transit à l'intérieur du même pays, en traversant une zone douanière spécifique, par exemple, d'un port à un aéroport.
   - Transit externe : Les marchandises entrent dans un pays, traversent son territoire et en sortent pour atteindre leur destination finale.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion">Objectif du transit</Accordion.Header>
            <Accordion.Body>
            Le transit permet d'assurer un transport fluide des marchandises à travers les frontières
             tout en évitant les droits de douane et les taxes qui seraient normalement applicables lors de 
             l'importation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion">Documents nécessaires</Accordion.Header>
            <Accordion.Body>
            - Un document de transport (comme un connaissement ou un CMR pour le transport routier).
   - Une déclaration de transit (également appelée déclaration de transit T1 ou T2 en Europe).
   - Une garantie financière pour couvrir les droits de douane et les taxes en cas de non-respect des règles de transit.

            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion">Processus de transit</Accordion.Header>
            <Accordion.Body>
            - Les marchandises sont placées sous douane sous un régime de transit au point d'entrée du pays.
   - Les marchandises transitent à travers le pays de transit en suivant un itinéraire prédéfini.
   - Les marchandises sont déchargées au point de destination finale, où les formalités douanières appropriées sont accomplies.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion">Règles et réglementations</Accordion.Header>
            <Accordion.Body>
            Les règles de transit varient d'un pays à l'autre. Il est essentiel de se conformer aux réglementations
             douanières du pays de transit et de respecter les délais impartis pour le transit. Les marchandises
              doivent être sous surveillance douanière tout au long du transit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="custom-accordion">  Garantie financière </Accordion.Header>
            <Accordion.Body>
            Pour bénéficier du régime de transit, il est souvent nécessaire de fournir une garantie
             financière, qui sera restituée une fois que les marchandises auront atteint leur destination
              finale conformément aux règles de transit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="custom-accordion">Risques et responsabilités </Accordion.Header>
            <Accordion.Body>
            Les responsabilités liées au transit, y compris la perte ou les dommages aux marchandises, sont
             généralement définies dans les termes du contrat de transport et dans les incoterms convenus entre
              les parties impliquées.

Le transit est une opération complexe qui nécessite une bonne compréhension des réglementations 
douanières, une documentation précise et une gestion efficace de la logistique. Il est recommandé
 de travailler avec des experts en commerce international ou des courtiers en douane pour garantir
  le bon déroulement du transit.
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    </div>
  )
}

export default Oktransits;
