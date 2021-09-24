import BalenciagaOrange from "../../balenciaga_orange.jpg";

const ShoeCard = () => {
    return (
        <div className="w-full sm:w-80 flex flex-col justify-between border-2 border-gray-200 rounded-xl m-4 p-8 hover:shadow-lg">
            <div>
                <p className="text-gray-400 text-md">High Speed Sneakers</p>
                <p className="text-gray-700 text-xl font-bold pt-2">Balenciaga</p>
            </div>
            <div className="w-full flex justify-center py-8">
                <img src={BalenciagaOrange} className="w-4/5" />
            </div>
            <span className="w-full flex justify-between items-center">
                <div>
                    <p className="text-gray-400 text-md">Price</p>
                    <p className="text-gray-700 text-xl font-bold pt-2">$ 790</p>
                </div>
            </span>
        </div>
    );
};

export default ShoeCard;