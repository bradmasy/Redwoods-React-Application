import "./merch.css"
import { Merch } from "./merch"
import { ImageContainer } from "../../../Image-Container/imageContainer"
import merch0 from "../../../../assets/img/merch/merch-0.jpg"
import merch1 from "../../../../assets/img/merch/merch-1.jpg"
import merch2 from "../../../../assets/img/merch/merch-2.jpg"
import merch3 from "../../../../assets/img/merch/merch-3.jpg"
import merch4 from "../../../../assets/img/merch/merch-4.jpg"
import merch5 from "../../../../assets/img/merch/merch-5.jpg"
import cart from "../../../../assets/icons/shopping-cart.png"

const merchImagePaths = [
    {
        url: merch0,
        alt: "merch-0",
        title: "Daybreaker Crew Neck",
        price: "$35.00"
    }, {
        url: merch1,
        alt: "merch-0",
        title: "Daybreaker Album CD",
        price: "$10.00"

    },
    {
        url: merch2,
        alt: "merch-0",
        title: "Daybreaker Tee",
        price: "$30.00"

    },
    {
        url: merch3,
        alt: "merch-0",
        title: "Daybreaker Baseball Tee",
        price: "$30.00"

    },
    {
        url: merch4,
        alt: "merch-0",
        title: "So Gay Tee",
        price: "$35.00"

    },
    {
        url: merch5,
        alt: "merch-5",
        title: "Daybreaker Tee",
        price: "$30.00"

    }]




export const MerchPage: React.FC = () => {

    return (
        <div id="merch-page">
            <div id="cart">
                <div id="cart-container">
                    <div id="cart-content">
                        <div id="cart-icon">
                            <img src={cart}>
                            </img>
                        </div>
                        <div id="item-count">
                            <div>
                                Items:
                            </div>
                            <div id="count">
                                0
                            </div>
                        </div>

                        <div id="total-spend">
                            $0
                        </div>

                    </div>

                </div>
            </div>
            <div id="store-content-container">

                <div id="store-content-x">

                    {merchImagePaths.map((image) => {
                        return (
                            <div className="merch-item">
                                <div className="merch-title">
                                    {image.title}
                                </div>
                                <div className="merch-price">
                                    {image.price}
                                </div>
                                <div className="merch-img">
                                    <div className="merch-img-x-align">
                                        <ImageContainer image={image} />
                                    </div>
                                </div>
                                <div className="merch-button-container">
                                    <div className="merch-button-x">
                                        <button className="merch-button">Buy Now</button>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}