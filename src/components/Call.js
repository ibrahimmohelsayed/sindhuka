import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.phone}`}>{props.phone}</a>
      </div>
      <div className="call-email">
        <strong>Name: </strong>
        {props.name}
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/contact" className="button">
          Contact
        </a>
      </div>
    )}
  </div>
);

export default Call;

