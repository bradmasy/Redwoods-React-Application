import "./imageContainer.css";
import { Image } from "./image";

interface ImageProps {
    image: Image;
}

export const ImageContainer: React.FC<ImageProps> = (image) => {
    return (
        <div className="image-container-object">
            <div className="image-container-x">
                <div className="image-container-y">
                    <img className="image-container-img" src={image.image.url} alt={image.image.alt} />
                </div>
            </div>
        </div>
    )
}