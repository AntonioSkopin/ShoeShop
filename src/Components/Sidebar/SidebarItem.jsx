import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const SidebarItem = () => {

    const [showMenu, setMenuVisibility] = useState(false);

    const showOptions = () => {
        setMenuVisibility(!showMenu);
    };

    return (
        <div className="w-72">
            <div className="w-full h-full justify-between items-center font-semibold border-b-2 border-r-2 border-gray-200">
                <span className="w-full flex justify-between p-4">
                    <h1 className="text-sm">Categories</h1>
                    {!showMenu && <RiArrowDownSLine onClick={showOptions} className="text-2xl cursor-pointer" />}
                    {showMenu && <RiArrowUpSLine onClick={showOptions} className="text-2xl cursor-pointer" />}
                </span>
            </div>
            {showMenu && <div className="menu flex flex-col px-4 py-2 border-b-2 border-r-2 text-gray-600 text-sm">
                <label class="inline-flex items-center py-2">
                    <input type="radio" class="form-radio" name="accountType" value="personal" />
                    <span class="ml-2">Flip Flops</span>
                </label>
                <label class="inline-flex items-center py-2">
                    <input type="radio" class="form-radio" name="accountType" value="personal" />
                    <span class="ml-2">Sneakers</span>
                </label>
                <label class="inline-flex items-center py-2">
                    <input type="radio" class="form-radio" name="accountType" value="personal" />
                    <span class="ml-2">Lace-up Shoes</span>
                </label>
                <label class="inline-flex items-center py-2">
                    <input type="radio" class="form-radio" name="accountType" value="personal" />
                    <span class="ml-2">Shoe Accessories</span>
                </label>
            </div>}
        </div>
    );
};

export default SidebarItem;