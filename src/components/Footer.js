import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import useTranslations from './useTranslations';
import AICSLogo from '../images/logos/AICS_logo2.png';
import ASIALogo from '../images/logos/ASIA_logo.jpg';
import CEAPREDLogo from '../images/logos/CEAPRED_logo.png';
import OIKOSLogo from '../images/logos/OIKOS_logo.png';
import PuntoSudLogo from '../images/logos/PuntoSud_logo.jpg';
import NepalLogo from '../images/logos/nepal_logo.png';

const Footer = props => {
  const { disclaimer } = useTranslations();

  return (
    <div className="footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <div className="col-12">
                <p className="footer-title py-3">{disclaimer}</p>
                <div className="footer-logos">
                  <a
                    href="https://www.aics.gov.it/language/en/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={AICSLogo} alt="AICS Logo" />
                  </a>
                  <a
                    href="https://asia-ngo.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={ASIALogo} alt="Asia Onlus Logo" />
                  </a>
                  <a
                    href="https://www.ceapred.org.np/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={CEAPREDLogo} alt="CEAPRED Logo" />
                  </a>
                  <a
                    href="https://www.istituto-oikos.org/en"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={OIKOSLogo} alt="Istituto Oikos Logo" />
                  </a>
                  <a
                    href="http://www.puntosud.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={PuntoSudLogo} alt="Punto Sud Logo" />
                  </a>
                  <a
                    href="http://kalimatimarket.gov.np/home/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={NepalLogo}
                      alt=" Government of Nepal, Ministry of Agriculture and Livestock Development Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
