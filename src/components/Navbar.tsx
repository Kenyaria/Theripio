import { useState } from "react";
import { Link } from "react-router";
import { X, Menu } from "react-feather";
import logo from "../assets/logo_cropped.png";
import "./App.css";

const Navbar = () => {
     const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <div>
            <nav 
                className="fixed z-100 w-full px-10 py-4 h-24 bg-white text-blue-950 shadow-lg">
                <div 
                    className="py-2 flex container mx-auto justify-between items-center font-monsterrat">
                    
                    {/* Logo */}
                    <Link
                        to="/"
                    >
                        <img className="h-14" src={logo} alt="Theripio logo" />
                    </Link>

                    {/* Hamburger menu visibility */}
                    <div
                        className="block lg:hidden"
                        onClick={() => setHamburgerOpen(!isHamburgerOpen)}
                    >
                        {isHamburgerOpen ? (
                            <X className="size-14 hover:cursor-pointer hover:text-sky-600"/>
                        ) : (
                            <Menu className="size-14 hover:cursor-pointer hover:text-sky-600" />
                        )}
                    </div>
                    

                    {/* Normal Menu*/}
                    <div
                        className="hidden lg:flex space-x-10 items-center text-2xl pr-30"
                    >
                        <Link to="/about" className="hover:text-sky-600">
                            About
                        </Link>
                        {/*
                        
                        <Link to="/areasoffocus" className="hover:text-sky-600">
                            Areas of Focus
                        </Link>
                        <Link to="/science" className="hover:text-sky-600">
                            Science
                        </Link>
                        */}
                        <Link to="/publications" className="hover:text-sky-600">
                            Publications
                        </Link>
                        <Link to="/news" className="hover:text-sky-600">
                            News
                        </Link>
                        <Link to="/contact" className="hover:text-sky-600">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hamburger menu*/}
            <div
                className={`mobile-menu fixed z-100 lg:hidden space-y-4 mt-24 py-2 flex flex-col justify-center w-full items-center text-3xl font-bold bg-white text-blue-950 ${
                    isHamburgerOpen ? "block" : "hidden"}`}
            >
                {/* 
                <Link to="/about" className="hover:text-sky-600">
                    About
                </Link>
                <Link to="/areasoffocus" className="hover:text-sky-600">
                    Areas of Focus
                </Link>
                <Link to="/science" className="hover:text-sky-600">
                    Science
                </Link>
                */}
                <Link to="/publications" className="hover:text-sky-600">
                    Publications
                </Link>
                <Link to="/news" className="hover:text-sky-600">
                    News
                </Link>
                <Link to="/contact" className="hover:text-sky-600">
                    Contact
                </Link>
            </div>
        </div>
    )
}
export default Navbar;