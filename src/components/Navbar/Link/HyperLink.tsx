import { ReactComponentElement } from 'react';
import { Link } from './LinkInterface';
import "./Link.css"
import { MainContent } from '../../Main-Content/main';

interface HyperLinkProps {
    link: Link;
    setPage: (page: MainContent) => void;
    
}

export const HyperLink: React.FC<HyperLinkProps> = ({ link,setPage }) => {

    const redirect = () => {
        console.log("redirecting")
        // const page = {page: link.content, url: link.url}
        // setPage(page)
        // console.log(page)
        window.location.href = link.url
       
    }

    return (
        <div className="hyper-link" >
            <div onClick={redirect}>
                {link.content}
            </div>
        </div>
    )
}

