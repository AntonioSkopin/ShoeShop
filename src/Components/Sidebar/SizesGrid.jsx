const SizesGrid = () => {
    return (
        <div className="w-72">
            <div className="p-4 py-8 border-b-2 border-r-2 border-gray-200">
                <h1 className="font-semibold">Size</h1>
                <div className="grid grid-cols-5 gap-4 pt-4 font-medium text-gray-600">
                    {[...Array(15)].map((elementInArray, index) => (
                        <p key={index} className="border-2 border-gray-200 py-1 bg-gray-100 rounded-md text-center hover:bg-white hover:shadow-md cursor-pointer">
                            {35 + index}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SizesGrid;