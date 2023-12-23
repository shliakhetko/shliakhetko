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
        <span className="FooterLinks__Title">{props.title}</span>
        <ul className="FooterLinks__Menu">
            {props.list.map((item, i) => <FooterLink content={item} targetBlank={props.targetBlank} />)}
        </ul>
    </div>
}

FooterLinks.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    targetBlank: PropTypes.bool,
}

const FooterLink = (props) => {
    const content = props.content;

    return <li className="FooterLinks__Item"><a className="FooterLinks__Link" href={content.link} target={props.targetBlank && "_blank"} rel="noreferrer">{content.title}</a></li>
}

FooterLink.propTypes = {
    content: PropTypes.object,
    targetBlank: PropTypes.bool,
}

export default FooterLinks;
