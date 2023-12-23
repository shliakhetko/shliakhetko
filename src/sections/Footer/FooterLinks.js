import React from "react";
import PropTypes from "prop-types";

export const links = [{
    title: "Introduction",
    link: "#",
}, {
    title: "About Me",
    link: "#about",
}, {
    title: "Technolgy Stack",
    link: "#technologies",
}, {
    title: "Projects",
    link: "#projects",
}]

export const FooterLinks = (props) => {
    return <div className="FooterLinks">
        <span className="FooterLinks__Title">Navigation</span>
        <ul className="FooterLinks__Menu">
            {props.list.map((item, i) => <FooterLink content={item} />)}
        </ul>
    </div>
}

FooterLinks.propTypes = {
    list: PropTypes.array,
}

const FooterLink = (props) => {
    const content = props.content;

    return <li className="FooterLinks__Item"><a className="FooterLinks__Link" href={content.link}>{content.title}</a></li>
}

FooterLink.propTypes = {
    content: PropTypes.object,
}

export default FooterLinks;
