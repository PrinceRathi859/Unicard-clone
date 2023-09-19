import { useState } from "react";

import useWindowSize from "../hooks/useWindowSize";

const HMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const windowSize = useWindowSize();

    const isSmallScreen = windowSize < 768;

    return (
        <div>
            {!isSmallScreen &&
                <button className="paycheck-btn">
                    Uni Paycheck
                </button>
            }
            {
                isSmallScreen &&
                    <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"></path><path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"></path><path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z"></path><path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"></path><path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"></path><path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z"></path></svg>
                                : <svg width="31" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 20"><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect></svg>
                        }
                        {
                            isOpen &&
                            <div className="menu-items">
                                <a className="menu-item">
                                    <span>Uni Paycheck</span>
                                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
                                </a>
                            </div>
                        }
                    </div>
            }
        </div>
    )
}

export default HMenu;