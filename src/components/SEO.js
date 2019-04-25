import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import faviconApple from '../../static/apple-touch-icon.png';
import favicon16 from '../../static/favicon-16x16.png';
import favicon32 from '../../static/favicon-32x32.png';
import faviconSafari from '../../static/safari-pinned-tab.svg';
import { LocaleContext } from './Layout';

const SEO = props => {
  const { locale } = React.useContext(LocaleContext);
  const { title } = props;
  return (
    <Helmet
      htmlAttributes={{
        lang: `${locale}`,
      }}
      title={title}
      link={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          type: 'image/png',
          href: `${faviconApple}`,
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: `${favicon32}`,
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: `${favicon16}`,
        },
        { rel: 'mask-icon', color: '#5bbad5', href: `${faviconSafari}` },
      ]}
    />
  );
};

export default SEO;
