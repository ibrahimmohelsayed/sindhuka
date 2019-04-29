import React from 'react';
import { Link } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import useTranslations from './useTranslations';

const SubFooter = props => {
  const { home, locations, contact } = useTranslations();
  const menuLinks = [
    {
      name: `${home}`,
      link: '/#get-started',
    },
    {
      name: `${locations}`,
      link: '/#locations',
    },
    {
      name: `${contact}`,
      link: '/#contact',
    },
  ];
  return (
    <div className="sub-footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer">
              <ul>
                {menuLinks.map(link => (
                  <li key={link.name}>
                    <LocalizedLink to={link.link}>{link.name}</LocalizedLink>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <a href="mailto:pol.milian.dev@gmail.com">
                    Made by <strong>Pol Milian</strong>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="copyright">
                  © {new Date().getFullYear()} Sindhuka
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
