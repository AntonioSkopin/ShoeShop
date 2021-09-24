import { FiBox, FiHeart, FiHelpCircle, FiShoppingBag, FiUser } from "react-icons/fi"
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const MobileNav = (props) => {
    return (
        <>
            <div
                className="h-screen w-2/5 fixed left-0 top-0 bg-black opacity-50"
                style={{ zIndex: "999" }}
                onClick={props.closeSidebar}
            ></div>
            <div className="h-screen w-3/5 bg-white fixed top-0 right-0" style={{ zIndex: "999" }}>
                <div className="h-full flex flex-col justify-center px-5">
                    <span className="flex items-center justify-between text-lg">
                        <span className="flex items-center">
                            <FiUser className="mr-4" />
                            <p>Hi, Antonio</p>
                        </span>
                        <MdKeyboardArrowRight className="text-2xl" />
                    </span>
                    <nav className="pt-12">
                        <span className="flex items-center justify-between text-lg py-2">
                            <a href="#">New Releases</a>
                            <MdKeyboardArrowRight className="text-2xl" />
                        </span>
                        <span className="flex items-center justify-between text-lg py-2">
                            <a href="#">Men</a>
                            <MdKeyboardArrowRight className="text-2xl" />
                        </span>
                        <span className="flex items-center justify-between text-lg py-2">
                            <a href="#">Women</a>
                            <MdKeyboardArrowRight className="text-2xl" />
                        </span>
                        <span className="flex items-center justify-between text-lg py-2">
                            <a href="#">Kids</a>
                            <MdKeyboardArrowRight className="text-2xl" />
                        </span>
                        <span className="flex items-center justify-between text-lg py-2">
                            <a href="#">Collections</a>
                            <MdKeyboardArrowRight className="text-2xl" />
                        </span>
                    </nav>
                    <div className="pt-12">
                        <span className="flex items-center text-lg py-2">
                            <FiHeart className="mr-4" />
                            <p>Favorites</p>
                        </span>
                        <span className="flex items-center text-lg py-2">
                            <FiShoppingBag className="mr-4" />
                            <p>Bag</p>
                        </span>
                        <span className="flex items-center text-lg py-2">
                            <FiBox className="mr-4" />
                            <p>Orders</p>
                        </span>
                        <span className="flex items-center text-lg py-2">
                            <FiHelpCircle className="mr-4" />
                            <p>Help</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;