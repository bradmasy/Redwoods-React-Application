import {Contact} from "./contact";

import "./contactPage.css";



interface ContactProps{
    contacts : Array<Contact>;
}

export const ContactPage: React.FC<ContactProps> = (contacts) => {
    return (
        <div id="contact-page">
            <div id="contact-page-y">
                <div id="contact-page-x">
                    <div id="contact-title">
                        CONTACT
                    </div>
                    <div id="contact-list">
                        {contacts.contacts.map((contact,index) => {
                            return(
                                <div className="contact-container" key={index}>
                                    <div className="contact-name">
                                        <div className="border-line">
                                        {contact.name.toUpperCase()}
                                        </div>
                                        </div>
                                    <div onClick={
                                        () => {
                                            window.location.href = `mailto:${contact.email}`
                                        }
                                    } className="contact-email">EMAIL: {contact.email}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}