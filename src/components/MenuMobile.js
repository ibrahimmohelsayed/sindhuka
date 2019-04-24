import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import useTranslations from './useTranslations';

const MenuMobile = props => {
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
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <LocalizedLink to={link.link}>{link.name}</LocalizedLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
