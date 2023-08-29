import { Heading } from "./heading";
import "./headline.css";

interface HeadlineProps {
    heading: Heading;
    subheading: string
}

const witchHuntLink = "https://open.spotify.com/track/2lMMCOhAZNrWswc9O6sleD?si=d404b20b8e9c4110";

const redirect = (link: string) => {
    window.location.href = link
}


export const Headline: React.FC<HeadlineProps> = ({ heading, subheading }) => (
    <div id="headline" onClick={() => redirect(witchHuntLink)}>
        <div id="heading">
            {heading.title}
        </div>
        <div id="subheading">
            {subheading}
        </div>
    </div>
)