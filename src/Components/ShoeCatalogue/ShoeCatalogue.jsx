import ShoeCard from "./ShoeCard";
import { FiFilter } from "react-icons/fi";

const ShoeCatalogue = () => {
    return (
        <div className="relative sm:left-72">
            <span className="w-full flex text-2xl items-center justify-between px-4 pt-28 pb-4">
                <h1 className="font-semibold">What we offer</h1>
                <FiFilter />
            </span>
            <div className="w-screen sm:w-full pr-8 sm:pr-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
            </div>
        </div>
    );
};

export default ShoeCatalogue;