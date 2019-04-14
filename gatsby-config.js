const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Sindhuka',
    description: `Join SINDHUKA’s sustainable farmers’ network: an added value for your business, a concrete support to local economy. 
    Sindhuka is a trademark which connects local vegetables, fruits and herbal plants producers aligned with
    sustainable and environmentally friendly production models.`,
    contact: {
      phone: '9 841 506 201',
      email: 'Sanjeev Dhakal',
    },
    menuLinks: [
      {
        name: 'Get started',
        link: '/get-started',
      },
      {
        name: 'Locations',
        link: '/locations',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-copy-linked-files'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
