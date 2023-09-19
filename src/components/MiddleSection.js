import { useRef, useState, useEffect } from "react";
import ContactInfo from "./ContactInfo";
import useWindowSize from "../hooks/useWindowSize";

const MiddleSection = () => {

    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const line4Ref = useRef(null);
    const iconRef = useRef(null);

    const windowSize = useWindowSize();
    const isSmallScreen = windowSize < 768;
    const [isVisible, setIsVisible] = useState(false);

    window.addEventListener('scroll', (e) => {
        const scY = window.scrollY;
        if (scY > 200 && line1Ref.current) {
            line1Ref.current.style.transform = "translateY(0px)";
            line1Ref.current.style.opacity = 1;
        }
        if (scY > 250 && line1Ref.current) {
            line2Ref.current.style.transform = "translateY(0px)";
            line2Ref.current.style.opacity = 1;
        }
        if (scY > 300 && line1Ref.current) {
            line3Ref.current.style.transform = "translateY(0px)";
            line3Ref.current.style.opacity = 1;
        }
        if (scY > 350 && line1Ref.current) {
            line4Ref.current.style.transform = "translateY(0px)";
            line4Ref.current.style.opacity = 1;
        }
        if (scY > 400 && iconRef.current) {
            iconRef.current.style.transform = "translateY(0px)";
            iconRef.current.style.opacity = 1;
        }
        if (scY > 400 && !isSmallScreen) {
            setIsVisible(true);
        }
        if (scY < 300 && !isSmallScreen) {
            setIsVisible(false);
        }
        if (isSmallScreen && scY > 10) {
            setIsVisible(true);
        }
    })

    return (
        <div className="middle-section">
            <div className="main-text">
                <p ref={line1Ref}><span className="black">Earn 1% assured cashback</span> on your spends. Get <span className="black">5X</span></p>
                <p ref={line2Ref}><span className="black">more value than cashback </span> at the Uni Store. Enjoy</p>
                <p ref={line3Ref}>round the clock <span className="black">Whatsapp support.</span> And it's</p>
                <p ref={line4Ref}><span className="black"> lifetime free;</span> no joining fee, no annual charges.</p>
            </div>
            <div className="icon-wrapper" ref={iconRef} >
                <div className="icon">
                    <img src="https://www.uni.cards/images/down_arrow.svg" />
                </div>
            </div>
            {isVisible && <ContactInfo floating />}
        </div>
    )
}

export default MiddleSection;