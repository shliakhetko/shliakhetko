import React from "react";
import Section from "../Section";
import "./index.scss";
import FooterLinks, { links } from "./FooterLinks";
// import FooterContacs from "./FooterContacs";
import FooterCopyright from "./FooterCopyright";
import socialNetworks from "../../data/socialNetworks";

export const Footer = () => {
    return (<Section className="Footer">
        <div className="Footer__Container">
            <FooterLinks title={"Navigation"} list={links} />
            <FooterLinks title={"Social Media"} list={socialNetworks} targetBlank={true} />
        </div>
        <FooterCopyright />
    </Section>)
}