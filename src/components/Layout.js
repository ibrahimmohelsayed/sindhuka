import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import SubFooter from './SubFooter';
import '../scss/style.scss';

const LocaleContext = React.createContext();

const Layout = ({ bodyClass, children, pageContext: { locale } }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <LocaleContext.Provider value={{ locale }}>
      <SEO />
      <animated.div
        style={fade}
        className={`page${bodyClass ? ` ${bodyClass}` : ''}`}
      >
        <div id="wrapper" className="wrapper">
          <Header />
          {children}
        </div>
        <Footer />
        <SubFooter />
      </animated.div>
    </LocaleContext.Provider>
  );
};

export { Layout, LocaleContext };

// bodyClass="page-home"
