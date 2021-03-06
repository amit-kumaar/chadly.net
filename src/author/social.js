import React from "react";
import injectSheet from "react-jss";
import { rhythm } from "../theme/typography";

const AuthorSocial = ({ author: { github, twitter, keybase }, classes }) => {
	if (!github && !twitter && !keybase) {
		return null;
	}

	return (
		<ul className={classes.container}>
			<SocialIcon
				id="fab fa-github"
				name="Github"
				href={`https://github.com/${github}`}
				show={!!github}
				rel="me"
			/>
			<SocialIcon
				id="fab fa-twitter"
				name="Twitter"
				href={`https://twitter.com/${twitter}`}
				show={!!twitter}
				rel="me"
			/>
			<SocialIcon
				id="fab fa-keybase"
				name="Keybase"
				href={`https://keybase.io/${keybase}`}
				show={!!keybase}
				rel="me"
			/>
		</ul>
	);
};

const SocialIcon = ({ id, name, show, ...props }) => {
	if (!show) return null;

	return (
		<li>
			<a title={name} {...props}>
				<i className={id} />
			</a>
		</li>
	);
};

const styles = {
	container: {
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& li": {
			display: "inline",
			margin: {
				top: 0,
				bottom: 0,
				left: 0,
				right: rhythm(0.5)
			},
			"& a": {
				textDecoration: "none"
			}
		}
	}
};

export default injectSheet(styles)(AuthorSocial);
