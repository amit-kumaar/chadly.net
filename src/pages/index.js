import React from "react";
import { Link, graphql } from "gatsby";

// import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import { get } from "lodash";

const RootIndex = ({ data, location }) => {
	const siteTitle = get(data, "site.siteMetadata.title");
	const posts = get(data, "allContentfulBlogPost.edges");
	// const [author] = get(data, "allContentfulPerson.edges");

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title="All posts"
				keywords={[`blog`, `gatsby`, `javascript`, `react`]}
			/>
			{/* <Bio /> */}
			{posts.map(({ node: { slug, title, tagLine, publishDate } }) => (
				<div key={slug}>
					<h3
						style={{
							marginBottom: rhythm(1 / 4)
						}}
					>
						<Link style={{ boxShadow: `none` }} to={`${slug}/`}>
							{title}
						</Link>
					</h3>
					<small>{publishDate}</small>
					<p
						dangerouslySetInnerHTML={{
							__html: get(tagLine, "childMarkdownRemark.html")
						}}
					/>
				</div>
			))}
		</Layout>
	);
};

export default RootIndex;

export const pageQuery = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
			edges {
				node {
					title
					slug
					publishDate(formatString: "MMMM Do, YYYY")
					tagLine {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
		allContentfulPerson(
			filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
		) {
			edges {
				node {
					name
					shortBio {
						shortBio
					}
					title
					heroImage: image {
						fluid(
							maxWidth: 1180
							maxHeight: 480
							resizingBehavior: PAD
							background: "rgb:000000"
						) {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;