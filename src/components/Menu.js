import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import useTranslations from './useTranslations';

const Menu = props => {
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
      link: '/contact',
    },
  ];
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <LocalizedLink to={link.link}>{link.name}</LocalizedLink>
          </li>
        ))}
        <li className="ml-5">
          <Link to="/" hrefLang="en">
            English
          </Link>
          /
          <Link to="/ne" hrefLang="ne">
            नेपाली
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
