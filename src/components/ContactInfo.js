import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";


const ContactInfo = ({
    floating = false
}) => {
    const [phoneNo, setphoneNo] = useState('');
    const [validated, setValidated] = useState(true);
    const [contactConsent, setContactConsent] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleValidated = (phn = null, chk = null) => {
        const newPhn = phn?? phoneNo;
        const newChk = chk?? contactConsent;
        if ((!newPhn || newPhn.length === 10) && newChk) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    }

    const handleChange = (e) => {
        const val = e.target.value;
        const strippedVal = val?.replace(/\D/g, "");
        setphoneNo(strippedVal);
        handleValidated(strippedVal, null);
    }

    const handleContactChange = (e) => {
        const chk = e.target.checked;
        setContactConsent(!!chk);
        handleValidated(null, chk);
    }

    const windowSize = useWindowSize();
    const isSmallScreen = windowSize < 768;

    const isVisible = !(isSmallScreen && !floating);

    if (!isVisible) {
        return null;
    }

    if (isSmallScreen) {
        return (
            <div className="contact-info-mobile">
                <div className="contact-mobile-wrapper">
                    {
                        isOpen && 
                        <input
                            placeholder="Enter Phone Number"
                            maxLength={10}
                            type="tel"
                            value={phoneNo}
                            onChange={(e) => handleChange(e)}
                            className="mob-input"
                        />
                    }
                    <button disabled={!validated} className={`apply-btn ${!validated ? 'dis' : ''}`} onClick={() => setIsOpen(!isOpen)} >
                        <span>Apply Now</span>
                        <img src="https://www.uni.cards/images/right_arrow.svg" />
                    </button>
                    {
                        isOpen &&
                        <div className="contact">
                            <input type="checkbox" id="contact-consent" checked={contactConsent} onChange={(e) => handleContactChange(e)} />
                            <label for="contact-consent">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                        </div>
                    }
                    </div>
            </div>
        )
    }

    return (
        <div className={`contact-info-wrapper ${floating ? 'float' : ''}`}>
            <div className="phone-input-wrapper">
                <input
                    placeholder="Enter Phone Number"
                    maxLength={10}
                    type="tel"
                    value={phoneNo}
                    onChange={(e) => handleChange(e)}
                />
                <button disabled={!validated} >Apply Now</button>
            </div>
            <div className="contact">
                <input type="checkbox" id="contact-consent" checked={contactConsent} onChange={(e) => handleContactChange(e)} />
                <label for="contact-consent">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
            </div>
        </div>
    )
}

export default ContactInfo;