import logo from "../assets/logo_cropped.png";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="h-24 w-full bg-sky-500 flex gap-10 py-5 px-5 md:px-10">
            <Link to="/">
                <img
                    className="h-12"
                    src={logo}
                    alt="Theripio logo"
                >
                </img>
            </Link>
            <h3
                className="text-white flex-grow text-center font-inter text-xs md:text-lg"
            >
                ©2026 Theripio Innovations LLC - All rights reserved.
            </h3>
        </div>
    )
}
export default Footer;