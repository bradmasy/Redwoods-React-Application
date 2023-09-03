import { useEffect } from 'react';
import { Home } from './home';
import { useState } from 'react';
import "./home.css"
import { Headline } from '../../../Headline';

interface HomeProps {
    photos: Array<string>
}

export const HomePage: React.FC = () => {
    const [imgPaths, setImgPaths] = useState<Array<string>>([]);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        console.log("Home Page")
        let paths: Array<string> = [];

        for (let i = 0; i < 15; i++) {
            paths.push(require(`../../../../assets/img/band-${i}.jpg`));
        }

        let chosenPaths = [];

        for (let i = imageIndex; i < (imageIndex + 7); i++) {

            chosenPaths.push(paths[i]);

        }

        if (chosenPaths.length < 7) {
            for (let i = 0; i < 7 - chosenPaths.length; i++) {
                chosenPaths.push(paths[i]);
            }
        }

        console.log(paths);
        setImgPaths(paths);

    }, [])

    return (
        <>
            <Headline heading={{ title: "Witch Hunt Out Now" }} subheading="Click Here to Listen" />
            <div id="content">
                <div id="home-grid">
                    <div id="column-align">
                        <div id="section-1">
                            <div className="photo-column">
                                <div className="photo-column-img">
                                    <img src={imgPaths[12]}>
                                    </img>
                                </div>
                                <div className="photo-column-img">
                                    <img src={imgPaths[1]}>
                                    </img>
                                </div>

                            </div>
                            <div className="long-photo-column">
                                <div className="long-photo-column-img">
                                    <img src={imgPaths[13]}>
                                    </img>
                                </div>
                                <div className="long-photo-column-img-sm">
                                    <img src={imgPaths[2]}>
                                    </img>
                                </div>
                            </div>

                        </div>
                        <div id="main-photo">
                            <img src={imgPaths[3]}></img>
                        </div>
                        <div id="section-2">
                            <div className="photo-row">
                                <div className="photo-row-img">
                                    <img src={imgPaths[7]}>
                                    </img>
                                </div>
                                <div className="photo-row-img">
                                    <img src={imgPaths[9]}>
                                    </img>
                                </div>

                            </div>
                            <div className="long-photo-row">
                                <div className="long-photo-row-img">
                                    <img src={imgPaths[11]}>
                                    </img>
                                </div>
                                <div className="long-photo-row-img-sm">
                                    <img src={imgPaths[10]}>
                                    </img>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}