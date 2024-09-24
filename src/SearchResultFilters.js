import React from 'react';

const SearchResultFilters = ({ selectedCity, setSelectedCity, showVerified, setShowVerified }) => {
    return (
        <div className="space-y-8" style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
            <h3 className="text-2xl font-bold">Filters</h3>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/blue_tick.svg" alt="tick" />
                    <p className="ms-2 text-sm w-fit font-medium text-black">Verified Vendors Only</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={showVerified}
                        onChange={() => setShowVerified(!showVerified)}
                    />
                    <div className="mr-[2px] relative w-11 h-6 bg-[#ACACAC] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>
            <div>
                <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                </select>
            </div>
            {/* Add your dropdown buttons for other filters here */}
            <div>
                <button className="w-full flex items-center justify-between text-base text-[#2F2F1C] font-semibold">
                    Services <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v" />
                </button>
            </div>
            {/* Repeat for other filters */}
        </div>
    );
};

export default SearchResultFilters;
