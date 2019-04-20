import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = props => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Join SINDHUKA’s sustainable farmers’ network: an added value for your business, a concrete support to local economy. Sindhuka is a trademark which connects local vegetables, fruits and herbal plants producers aligned with
          sustainable and environmentally friendly production models."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Sindhuka - The sustainable farmers' network</h1>
          <p>
            Join SINDHUKA: an added value for your business, a concrete support
            to local economy. Sindhuka is a trademark which connects local
            vegetables, fruits and herbal plants producers aligned with
            sustainable and environmentally friendly production models.
          </p>
          <div className="call-box-bottom mt-4">
            <a href="#get-started" className="button">
              Find out more
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container pt-2">
        <Call button />
      </div>
      <div className="container pt-2">
        <Call button />
      </div> */}

      <div id="get-started" className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Get Started</h2>
          </div>
          {markdown.map(edge => (
            <>
              <div
                key={edge.node.frontmatter.path}
                className="col-12 col-md-4 mb-1"
              >
                <div className="card service service-teaser">
                  <div className="card-content">
                    <h2>
                      <Link to={`/#${edge.node.frontmatter.path}`}>
                        {edge.node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>{edge.node.excerpt}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
          {markdown.map(edge => (
            <div className="container pt-4 pt-md-10">
              <div className="row justify-content-start">
                <div className="col-12 col-md-8">
                  <div
                    id={edge.node.frontmatter.path}
                    className="service service-single"
                  >
                    <h1 className="title">{edge.node.frontmatter.title}</h1>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: edge.node.html }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="locations" className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Locations</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} alt="Featured" />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.district}</h2>
                <div className="feature-content">{edge.node.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/get-started/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
          html
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          district
          location
          cooperative
          coordenates
          image
        }
      }
    }
  }
`;

export default Home;
