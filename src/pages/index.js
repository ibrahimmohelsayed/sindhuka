import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import MdxLink from '../components/MDXLink';
import LocalizedLink from '../components/LocalizedLink';
import SEO from '../components/SEO';
import useTranslations from '../components/useTranslations';

const Index = ({ data: { allMdx, allFeaturesJson } }) => {
  const { hello } = useTranslations();
  return (
    <>
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
          <h1>{hello}</h1>
          <p>
            Join SINDHUKA: an added value for your business, a concrete support
            to local economy. Sindhuka is a trademark which connects local
            vegetables, fruits and herbal plants producers aligned with
            sustainable and environmentally friendly production models.
          </p>
          <div className="call-box-bottom mt-4">
            <Link to="#get-started" className="button">
              Find out more
            </Link>
          </div>
        </div>
      </div>
      <div id="get-started" className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Get Started</h2>
          </div>
          {allMdx.edges.map(({ node: post }) => (
            <>
              <div
                key={`${post.frontmatter.title}-${post.fields.locale}`}
                className="col-12 col-md-4 mb-5"
              >
                <div className="card service service-teaser">
                  <div className="card-content">
                    <h2>
                      <LocalizedLink to={`/#${post.parent.relativeDirectory}`}>
                        {post.frontmatter.title}
                      </LocalizedLink>
                    </h2>
                    <p>{post.excerpt}</p>
                    <LocalizedLink to={`/#${post.parent.relativeDirectory}`}>
                      Read more →
                    </LocalizedLink>
                  </div>
                </div>
              </div>
            </>
          ))}
          {allMdx.edges.map(({ node: post }) => (
            <div
              key={`${post.frontmatter.title}-${post.fields.locale}`}
              className="container pt-4 pt-md-10"
            >
              <div className="row justify-content-start">
                <div className="col-12 col-md-8">
                  <div
                    id={post.parent.relativeDirectory}
                    className="service service-single"
                  >
                    <h1 className="title">{post.frontmatter.title}</h1>

                    <MDXRenderer
                      components={{
                        a: MdxLink,
                      }}
                    >
                      {post.code.body}
                    </MDXRenderer>
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
          {allFeaturesJson.edges.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.mapLink && (
                  <div className="feature-image">
                    <iframe
                      title={edge.node.location}
                      src={edge.node.mapLink}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.location}</h2>
                <div className="feature-content">{edge.node.district}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          excerpt
          code {
            body
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          district
          location
          mapLink
        }
      }
    }
  }
`;

export default Index;
