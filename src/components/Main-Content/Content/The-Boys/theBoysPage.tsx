import { ImageContainer } from "../../../Image-Container/imageContainer"
import { TextBoxContainer } from "../../../Text-Box/textBoxContainer"
import "./boys.css";
import mainBandImg from "../../../../assets/img/band-3.jpg";
import { BandProfile } from "../../../Profile/bandProfile";

interface BoysPageProps {

}

const copy = `Redwoods is a hard rock band from Vancouver, Canada, formed in the early 2010s. They've found a way to blend the coolness of 70s rock,vibrance of 80s metal, and grit of 90s grunge into a diverse rock sound offering nothing short of excitement in today's music scene\.Lyrically, the band wears their emotions on their sleeves,
    however, they do not shy away from revelling in the euphoria of young adulthood when desired.
    Their songs capture the highs and lows of romance, and aim to expose the fine line between 
    right and wrong in our society... with the occasional straight ahead party anthem. Their
    performances are fun, sweaty and infectious, breathing electricity into each member of 
    the room like a contagious rock - and - roll virus.With their first full length album 
    Daybreaker in the rear view, Redwoods has teamed up with producer Matt Roach at Rain City
    Recorders to refine their sound, and is eager to unleash more rock & roll into the
    post - pandemic world.`

const textbox = {
    title: "Now Your Messin' With The Redwoods Boys...",
    copy: copy
}

const image = {
    url: mainBandImg,
    alt: "Band Photo"
}

const profiles = require("./bandProfiles.json")["profiles"]

export const TheBoysPage: React.FC = () => {

    return (
        <div id="the-boys">
            <div id="centre-elements">
                <div id="align-y-items">
                    <div id="bio">
                        <div id="text">
                            <TextBoxContainer textBox={textbox} />
                        </div>
                        <div className="image-container">
                            <ImageContainer image={image} />
                        </div>
                    </div>

                    {/* <div id="introduction">
                        <BandProfile profiles={profiles} />
                    </div> */}

                </div>



            </div>

        </div>
    )
}