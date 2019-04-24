import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import AICSLogo from '../images/logos/AICS_logo.png';
import ASIALogo from '../images/logos/ASIA_logo.jpg';
import CEAPREDLogo from '../images/logos/CEAPRED_logo.png';
import OIKOSLogo from '../images/logos/OIKOS_logo.png';
import PuntoSudLogo from '../images/logos/PuntoSud_logo.jpg';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <div className="col-12">
              <p className="footer-title py-3">
                The initiative is part of the project Development of Climate
                Change Resilient Agriculture (DCCRA), promoted by ASIA Onlus in
                partnership with Ceapred, Istituto Oikos Onlus and Punto.Sud,
                funded by the Italian Agency for Development Cooperation.
              </p>
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
