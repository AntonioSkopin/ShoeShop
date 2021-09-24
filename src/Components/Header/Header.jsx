import { useState } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { RiMenu3Line } from "react-icons/ri";
import Img from "../../img.png";
import MobileNav from './MobileNav';
import SearchShoeBar from './SearchShoeBar';

const Header = () => {

    const [mobileNavVisibility, setMobileNavVisibility] = useState(false);

    const openMobileNav = () => {
        setMobileNavVisibility(!mobileNavVisibility);
    };

    return (
        <div>
            {/* <div className="fixed top-0 bg-white" style={{ zIndex: "998" }}>
                <header className="w-screen border-b-2 border-gray-200 flex justify-between items-center px-4 sm:px-12 py-6">
                    <h1 className="text-xl font-semibold">Shoe.</h1>
                    <span className="hidden sm:flex items-center w-2/5 border-2 border-gray-200 px-4 py-2 rounded-lg">
                        <FiSearch className="text-gray-400 mr-4" />
                        <input type="text" placeholder="Search for a shoe" className="w-full focus:outline-none font-medium" />
                    </span>
                    <span className="hidden sm:flex items-center">
                        <FiShoppingBag className="text-2xl" />
                        <div
                            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 w-12 h-12 rounded-full ml-6">
                            <img src={Img} className="bg-white rounded-full" alt="" />
                        </div>
                    </span>
                    <span className="sm:hidden flex items-center text-2xl">
                        <FiSearch />
                        <FiShoppingBag className="mx-5" />
                        <RiMenu3Line onClick={openMobileNav} />
                    </span>
                </header>
            </div>
            {mobileNavVisibility && <MobileNav closeSidebar={openMobileNav} />} */}
            <SearchShoeBar />
        </div>
    );
};

export default Header;