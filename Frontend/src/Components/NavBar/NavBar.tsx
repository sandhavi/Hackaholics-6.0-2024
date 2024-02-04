import React, { useState } from "react";
import logo from "../../Assets/NavBar/logo.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import mobileLogo from "../../Assets/NavBar/as-lpgp.png";
import { HashLink } from "react-router-hash-link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0  w-screen bg-secondary bg-opacity-70 z-10 ${isOpen ? "" : "overflow-hidden"
                }`}
        >
            <div className="flex flex-col lg:flex-row justify-between items-right ml-0 lg:ml-1 mr-1 md:mr-0 mb-0 px-2 md:px-9 py-5 md:py-5">
                <div className="flex items-center">
                    <a href="/" className="block md:hidden">
                        <img
                            className="relative inline-block h-15 w-9 ml-8 mt-0"
                            src={mobileLogo}
                            alt="mobile-logo"
                        />
                    </a>

                    <a
                        href="https://github.com/IEEEUCSC"
                        className="hidden md:block mt-1"
                    >
                        <img
                            className="inline-block h-10 ml-2 mt-2 md:mr-10"
                            src={logo}
                            alt="wie-logo"
                        />
                    </a>

                    <div className="md:hidden flex justify-end items-end absolute top-5 right-10">
                        <IconButton
                            onClick={toggleMenu}
                            color="inherit"
                            sx={{ color: isOpen ? "gray" : "white" }}
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                </div>
                <div className="">
                <div
                    className={`md:flex flex-col md:flex-row md:space-y-0 space-y-2 text-xl flex justify-end items-center absolute top- right-10 whitespace-nowrap ${isOpen ? "block box-border border-tertiary bg-white bg-opacity-10 shadow-xl text-secondary row-gap-1 md:absolute md:items-center  md:right-10 border-2 font-pfont rounded-lg" : "hidden"
                        }`}
                >
                    {[
                        { label: "Home", link: "/#home" },
                        { label: "Time Line", link: "/#time" },
                        { label: "Prizes", link: "/#price" },
                        { label: "Register Now", link: "https://github.com/IEEEUCSC" },
                    ].map((item, index) => (

                        !(item.label === "Register Now" && !isOpen) && (
                            <a key={index} href={item.link} className="group relative md:mr-9">
                                <div className="md:py-1 px-3 md:mt-2 z-100 indigo-950 md:text-white md:mb-2 hover:text-purple-300 active:bg-indigo-600 active:text-white text-center">
                                    {item.label}
                                    <div className="absolute inset-x-0 z-100 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                                </div>
                            </a>
                        )
                    ))}
                    
                    {/* Conditionally render Register Now button for non-mobile screens */}
                    {!isOpen && (
                    <HashLink smooth to="/team" className="relative rounded px-3 py-2 overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-violet-700 hover:to-purple-900 text-white hover:ring-1 hover:ring-offset-1 hover:ring-white transition-all ease-out duration-500 md:align-middle md:items-center mx-auto">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-tertiary opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative text-center">Register Now</span>
                    </HashLink>

                    )}
            </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
