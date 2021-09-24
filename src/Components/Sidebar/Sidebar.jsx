import SidebarItem from "./SidebarItem";
import PriceSlider from "./PriceSlider";
import SizesGrid from "./SizesGrid";

const Sidebar = () => {
    return (
        <div className="hidden sm:block fixed left-0 bg-white" style={{ zIndex: "999" }}>
            <SidebarItem />
            <SidebarItem />
            <PriceSlider
                min={0}
                max={1000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            <SizesGrid />
        </div>
    );
};

export default Sidebar;