import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import useTranslations from './useTranslations';
import AICSLogo from '../images/logos/AICS_logo2.png';
import ASIALogo from '../images/logos/ASIA_logo.jpg';
import CEAPREDLogo from '../images/logos/CEAPRED_logo.png';
import OIKOSLogo from '../images/logos/OIKOS_logo.png';
import PuntoSudLogo from '../images/logos/PuntoSud_logo.jpg';

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
                  <img src={AICSLogo} />
                  <img src={ASIALogo} />
                  <img src={CEAPREDLogo} />
                  <img src={OIKOSLogo} />
                  <img src={PuntoSudLogo} />
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
