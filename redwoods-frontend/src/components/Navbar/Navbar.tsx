import React from "react";
import { HyperLink } from "./Link/index";

interface NavbarProps {
    links: Array<{
        url: string;
        content: string;
    }>;
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => (
    <div id="navbar">
        {links.map((link, index) => (
            <HyperLink key={index} link={link} />
        ))}
    </div>
)

