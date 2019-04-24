import React from 'react';
import SEO from '../../components/SEO';
import Call from '../../components/Call';
import useTranslations from '../../components/useTranslations';

const Contact = props => {
  const { responsibleFarmer } = useTranslations();
  return (
    <>
      <SEO title="Contact" />
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact</h1>
              <p>{responsibleFarmer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 mb-2">
            <Call button={false} phone="9841506201" name="Sanjeev Dhakal" />
          </div>
          <div className="col-12">
            <Call button={false} phone="9849826142" name="Dhurba Regmi" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
