import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const SearchShoeBar = () => {
    return (
        <div className="h-screen">
            <span className="w-screen flex items-center justify-center p-4">
                <span className="w-5/6 flex items-center px-2 py-1 border-2 border-gray-200 rounded-xl">
                    <FiSearch className="text-gray-400 mr-2" />
                    <input
                        className="rounded-xl outline-none w-full"
                        type="text"
                        placeholder="Search"
                    />
                </span>
                <span className="flex items-center p-2 border-2 border-gray-200 rounded-full ml-4">
                    <GrClose />
                </span>
            </span>
        </div>
    );
};

export default SearchShoeBar;