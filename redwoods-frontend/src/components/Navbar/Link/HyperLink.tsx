import { ReactComponentElement } from 'react';
import { Link } from './LinkInterface';


interface HyperLinkProps {
    link: Link;
}

export const HyperLink: React.FC<HyperLinkProps> = ({ link }) => {

    const redirect = () => {
        window.location.href = link.url
    }

    return (
        <div className="hyper-link" onClick={redirect}>
            <div>
                {link.content}
            </div>
        </div>
    )
}

