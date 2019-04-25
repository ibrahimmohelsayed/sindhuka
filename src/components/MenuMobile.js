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

  const handleClick = () => {
    const element = document.querySelector('#main-menu-mobile');
    element.classList.remove('open');
    document
      .querySelector('#toggle-main-menu-mobile')
      .classList.remove('is-active');
  };
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <LocalizedLink onClick={handleClick} to={link.link}>
              {link.name}
            </LocalizedLink>
          </li>
        ))}
        <li className="mt-5" onClick={handleClick}>
          <Link to="/" hrefLang="en">
            English
          </Link>
          <Link to="/ne" hrefLang="ne">
            नेपाली
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
