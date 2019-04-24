import React from 'react';
import { Link } from 'gatsby';
import LocalizedLink from './LocalizedLink';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/sindhuka_logo.png';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <LocalizedLink to="/">
              <img alt="Sindhuka Logo" src={logo} />
            </LocalizedLink>
          </div>
          <div className="logo-mobile">
            <LocalizedLink to="/">
              <img alt="Sindhuka Logo" src={logo} />
            </LocalizedLink>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
