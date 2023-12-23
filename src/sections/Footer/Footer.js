import React from "react";
import Section from "../Section";
import "./index.scss";
import FooterLinks, { links } from "./FooterLinks";
import FooterContacs from "./FooterContacs";
import FooterCopyright from "./FooterCopyright";

export const Footer = () => {
    return (<Section className="Footer">
        <div className="Footer__Container">
            <FooterLinks list={links} />
        </div>
        <FooterCopyright />
    </Section>)
}