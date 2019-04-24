import React from 'react';
import { Link } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                {' '}
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/contact">Contact</Link>
              </li>
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

export default SubFooter;
