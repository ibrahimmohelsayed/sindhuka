import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import useTranslations from './useTranslations';

const Call = props => {
  const { phone, name } = useTranslations();
  return (
    <div className="call">
      <div className="call-box-top">
        <div className="call-phone">
          <strong>{phone}: </strong>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </div>
        <div className="call-email">
          <strong>{name}: </strong>
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
};

export default Call;
