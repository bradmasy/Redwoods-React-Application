import { DateInterface } from "./datesInterface"
import "./dates.css"



interface DateProps {
    dates: Array<DateInterface>
}
export const DatesPage: React.FC<DateProps> = (dates) => {



    return (
        <div id="dates-page">
            <div id="dates-content">
                <div id="align-content-x">
                    <div id="date-grid-x">
                        <div id="date-grid-y">
                            {dates.dates.map((date, index) => (
                                <div className="date" key={index}>
                                    <div className="size-date">
                                        <div className="date-time">
                                            {date.date}
                                        </div>
                                        <div className="date-location">
                                            {date.location}
                                        </div>
                                        <div className="date-city">
                                            {date.city}
                                        </div>
                                        <div className="date-tickets">
                                            <button style={{ color: "rgb(135, 21, 3)" }} >
                                                RSVP
                                            </button>
                                            <button style={{ color: "black" }} onClick={() => {

                                            }}>
                                                TICKETS
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}