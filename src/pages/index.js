import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Img from 'gatsby-image';
import Contact from '../components/Contact';
import MdxLink from '../components/MDXLink';
import LocalizedLink from '../components/LocalizedLink';
import SEO from '../components/SEO';
import useTranslations from '../components/useTranslations';

const Index = ({ data: { allMdx, allFeaturesJson } }) => {
  const {
    hello,
    findOutMore,
    home,
    readMore,
    getStarted,
    locations,
    join,
    sindhuka,
  } = useTranslations();
  return (
    <>
      <SEO title={`${home} - ${sindhuka}`} />
      <Helmet>
        <meta name="description" content={join} />
      </Helmet>
      <div className="intro py-5 mt-5">
        <div className="container">
          <div className="jumbotron text-center">
            <h1 className="display-4">{hello}</h1>
            <p className="lead text-muted py-1">{join}</p>
            <div className="call-box-bottom mt-4">
              <LocalizedLink to="/#get-started" className="button">
                {findOutMore}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
      <div id="get-started" className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">{getStarted}</h2>
          </div>
          {allMdx.edges.map(({ node: post }) => (
            <>
              <div
                key={`${post.frontmatter.title}-${post.fields.locale}`}
                className="col-12 col-md-4 mb-5"
              >
                <div className="card service service-teaser">
                  <LocalizedLink to={`/#${post.parent.relativeDirectory}`}>
                    <div className="card-content">
                      <h2>{post.frontmatter.title}</h2>
                      <p>{post.excerpt}</p>
                      <span>{readMore} →</span>
                    </div>
                  </LocalizedLink>
                </div>
              </div>
            </>
          ))}
          {allMdx.edges.map(({ node: post }, index) => (
            <div
              key={`${post.frontmatter.title}-${post.fields.locale}`}
              className="container pt-4 pt-md-10"
            >
              <div className="row justify-content-start align-items-center">
                <div className="col-12 col-md-6 px-3">
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
                {index % 2 !== 0 ? (
                  <div className="col-12 col-md-6 order-lg-first">
                    <Img
                      fluid={post.frontmatter.sideImage.childImageSharp.fluid}
                      alt="Farming sustainably in Nepal"
                    />
                  </div>
                ) : (
                  <div className="col-12 col-md-6">
                    <Img
                      fluid={post.frontmatter.sideImage.childImageSharp.fluid}
                      alt="Farming sustainably in Nepal"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="locations" className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">{locations}</h2>
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
      <Contact />
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
            sideImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
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
