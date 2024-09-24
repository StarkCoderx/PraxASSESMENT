import React, { useState } from 'react';
import SearchResultNavbar from './SearchResultNavbar';
import SearchResultCards from './SearchResultCards';
import SearchResultFilters from './SearchResultFilters';
import SearchResultText from './SearchResultText';
import SearchResultPagination from './SearchResultPagination';
import SearchResultFooter from './SearchResultFooter';

const SearchResults = () => {
    const [filtersClicked, setFiltersClicked] = useState(true);

    const handleFilters = () => {
        setFiltersClicked(!filtersClicked);
    }

    return (
        <div className='max-w-[1280px] mx-auto flex flex-col justify-center'>
            <style>
                {`
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE 10+ */
                    scrollbar-width: none; /* Firefox */
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari */
                }
                `}
            </style>

            {/* Navbar */}
            <div className="sticky top-0 z-10 bg-white shadow-md">
                <SearchResultNavbar />
            </div>

            {/* Search Result Header */}
            <div className="py-4 px-6 bg-white border-b">
                <SearchResultText />
            </div>

            {/* Filter Toggle Button */}
            <div className="flex justify-between items-center my-4 px-6">
                <button 
                    onClick={handleFilters} 
                    className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    {filtersClicked ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex px-6 gap-6">
                {/* Filters Section */}
                {filtersClicked && (
                    <div className="w-1/4 p-6 bg-gray-50 border rounded-lg shadow-lg h-[90vh] overflow-y-auto hide-scrollbar">
                        <SearchResultFilters />
                    </div>
                )}

                {/* Search Results Section */}
                <div className={`flex-1 ${filtersClicked ? '' : 'w-full'}`}>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <SearchResultCards />
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="py-8 px-6 bg-gray-50">
                <SearchResultPagination />
            </div>

            {/* Footer */}
            <div className="bg-white pt-8 pb-4 border-t">
                <SearchResultFooter />
            </div>
        </div>
    );
}

export default SearchResults;
