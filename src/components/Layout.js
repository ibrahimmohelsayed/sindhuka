import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import SubFooter from './SubFooter';
import '../scss/style.scss';

const LocaleContext = React.createContext();

const Layout = ({ bodyClass, children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <SEO />
    <div className={`page${bodyClass ? ` ${bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext };

// bodyClass="page-home"
