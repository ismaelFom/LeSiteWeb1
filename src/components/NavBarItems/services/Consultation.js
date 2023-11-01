import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';

const Consultation = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp persobg" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle">ADVICE</h1></center>
        
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion">Consultez un expert en commerce international</Accordion.Header>
            <Accordion.Body>
            Les experts en commerce international, tels que les consultants en commerce extérieur, peuvent fournir
             des conseils personnalisés
             en fonction de votre entreprise, de votre secteur d'activité et de votre situation spécifique.
             Assurez-vous que votre personnel est formé et compétent en matière de commerce international.
              La connaissance des règles et des procédures est essentielle pour éviter les problèmes.
        
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion">Renseignez-vous sur les réglementations douanières </Accordion.Header>
            <Accordion.Body>
            Avant d'importer, exporter ou faire transiter des marchandises, assurez-vous de comprendre les
             réglementations douanières en vigueur dans votre pays et dans le pays de destination.
              Cela inclut la documentation requise, les droits de douane, les taxes et les restrictions sur
               les marchandises.
               Les douanes de votre pays peuvent fournir des informations sur les réglementations en vigueur,
                les procédures douanières et les exigences documentaires pour les imports, exports et transit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion"> Faites appel à un courtier en douane</Accordion.Header>
            <Accordion.Body>
            Les courtiers en douane sont des professionnels spécialisés dans le traitement des formalités
             douanières. Ils peuvent vous guider à travers le processus et vous aider à vous conformer aux règles.
             Si vous n'êtes pas familier avec les procédures douanières, il peut être judicieux de faire appel
              à un courtier en douane ou à un transitaire pour vous aider à traiter les formalités douanières.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion">Obtenez les licences et permis nécessaires </Accordion.Header>
            <Accordion.Body>
            Certaines marchandises et activités peuvent nécessiter des licences ou des permis spéciaux.
             Assurez-vous de les obtenir avant de procéder aux opérations d'import, d'export ou de transit.
             Consultez des chambres de commerce , Les chambres de commerce locales peuvent offrir des services 
             de conseil en commerce international, des ateliers et des ressources pour les entreprises impliquées
              dans les activités d'imports, d'exports et de transit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion">Classez correctement les marchandises</Accordion.Header>
            <Accordion.Body>
            Il est essentiel de classifier correctement les marchandises en fonction du système
             harmonisé (SH) ou du système de classement des marchandises utilisé dans votre pays.
              Une mauvaise classification peut entraîner des problèmes douaniers.
              Utilisez des ressources en ligne  Il existe de nombreuses ressources en ligne, y compris les sites web 
              des autorités douanières, les guides sur le commerce international et les forums de discussion,
               qui peuvent fournir des informations utiles.

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion">Emballage adéquat</Accordion.Header>
            <Accordion.Body>
            Assurez-vous que les marchandises sont correctement emballées pour éviter tout dommage pendant 
            le transport. Le non-respect des normes d'emballage peut entraîner des retards et des pertes.
            Participez à des formations et séminaires  Les formations sur le commerce international peuvent
             vous aider à acquérir des connaissances et des compétences essentielles pour gérer les imports,
              les exports et le transit de manière efficace.


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="custom-accordion">Assurez-vous d'une logistique fiable</Accordion.Header>
            <Accordion.Body>
            Choisissez des transporteurs et des partenaires logistiques fiables pour garantir que vos marchandises
             sont livrées en toute sécurité et à temps.
             Connaître les incoterms : Utilisez les incoterms (termes internationaux de commerce) appropriés 
             dans vos contrats pour définir clairement les responsabilités et les coûts entre l'acheteur 
             et le vendeur.

            </Accordion.Body>
          </Accordion.Item>
      </div>
    </div>
  )
}

export default Consultation
