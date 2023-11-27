import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../../style/pages.css';
import Btnwhatsapp from '../../Error/Btnwhatsapp';

const Btp = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp btpcss" data-wow-delay="0.1s">
      <div className="container py-5">

        <center><h1 className="exporttitle">Batiment et Traveaux publics(BTP) </h1></center>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion">Résumé Opérationnels #1</Accordion.Header>
            <Accordion.Body>
            Le BTP (Bâtiment et Travaux Publics) est un secteur d'activité qui regroupe l'ensemble des entreprises qui interviennent dans la construction et la rénovation des bâtiments ainsi que dans les travaux publics tels que les infrastructures routières, les réseaux d'eau et d'électricité, les ouvrages d'art, etc. Le BTP englobe donc toutes les étapes du processus de construction, depuis la conception et la réalisation jusqu'à la maintenance et la réhabilitation des bâtiments et des infrastructures. Ce secteur est essentiel pour le développement des villes et des territoires, et il mobilise une main-d'œuvre qualifiée et spécialisée dans différents métiers tels que maçons, électriciens, plombiers, charpentiers, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion">Construction et rénovation de bâtiments </Accordion.Header>
            <Accordion.Body>
              l'entreprise peut être chargée de la construction de bâtiments résidentiels, commerciaux ou industriels, ainsi que de la rénovation de bâtiments existants.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion">Génie civil</Accordion.Header>
            <Accordion.Body>
              cela comprend des travaux tels que la construction de ponts, de routes, de tunnels, de digues, de barrages, de réseaux d'assainissement, etc
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion">Travaux de gros œuvre</Accordion.Header>
            <Accordion.Body>
              l'entreprise peut réaliser les travaux de fondation, de structure et de maçonnerie nécessaires à la construction du bâtiment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion">Travaux de second œuvre</Accordion.Header>
            <Accordion.Body>
              cela inclut les travaux de finition tels que l'installation des revêtements de sol, des menuiseries intérieures et extérieures, de l'électricité, de la plomberie, de la climatisation, de la ventilation, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion">Aménagement extérieur</Accordion.Header>
            <Accordion.Body>
              cela comprend les travaux d'aménagement paysager, la création d'espaces verts, la pose de terrasses, l'installation d'éclairage extérieur, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="custom-accordion"> Aménagement extérieur </Accordion.Header>
            <Accordion.Body>
              cela comprend les travaux d'aménagement paysager, la création d'espaces verts, la pose de terrasses, l'installation d'éclairage extérieur, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="custom-accordion">Maintenance et entretien </Accordion.Header>
            <Accordion.Body>
              certaines entreprises du BTP proposent également des services de maintenance et d'entretien des bâtiments, tels que la réparation des systèmes électriques, la maintenance des installations de plomberie, la rénovation des revêtements, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="custom-accordion">Conseil technique</Accordion.Header>
            <Accordion.Body>
              l'entreprise peut fournir des services de conseil technique aux clients, en les aidant à élaborer des plans de construction, en leur fournissant des études de faisabilité, en les conseillant sur les matériaux à utiliser, etc
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Btnwhatsapp />
      </div>
    </div>
  )
}

export default Btp;
