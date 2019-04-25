import React from 'react';
import Call from './Call';
import useTranslations from './useTranslations';

const Contact = props => {
  const {
    responsibleFarmer,
    contact,
    contactName1,
    contactName2,
  } = useTranslations();
  return (
    <div id="contact" className="bg-light pb-10">
      <div className="container pt-5 pt-md-7">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{contact}</h1>
              <p>{responsibleFarmer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 mb-2">
            <Call button={false} phone="9841506201" name={contactName1} />
          </div>
          <div className="col-12">
            <Call button={false} phone="9849826142" name={contactName2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
